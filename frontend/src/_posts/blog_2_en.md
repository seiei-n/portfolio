---
title: "Implementing the backend of a mobile app using Hono and Cloudflare Workers"
date: "2023-12-18"
slug: "hono-mobile-backend"
description: "Implementing the backend of a mobile app using Hono and Cloudflare Workers"
author: "Seiei Nagahama"
thumbnail:
tags: "Web","Hono","Cloudflare Workers","D1","R2","Drizzle"
type: "blog"
lang : "en"
---
## This article is the 18th day of the Hono Advent Calendar 2023
<https://qiita.com/advent-calendar/2023/hono>

# Background
In my university class, I'm developing an ios app as a team. The app needed a backend, so I decided to use the hottest technology stack, Hono and Cloudflare Workers, to implement the backend. It's an MVP, so I didn't do anything fancy.


# Tech Stack

- [Hono](https://hono.dev/)

Needless to say.

- [Cloudflare Workers](https://workers.cloudflare.com/)

This too.

- [Cloudflare D1](https://developers.cloudflare.com/d1/)

I needed a database, so I used it.

- [Drizzle](https://orm.drizzle.team/)

It's a TypeScript ORM that also supports D1. It's hot.

- [Cloudflare R2](https://developers.cloudflare.com/r2/)

As a requirement of this app, there was a photo posting, so I used it as a storage location.

# Setup

## Wrangler

Since I'm using Cloudflare Workers, I need to set up Wrangler. First of all,


```bash
npm install -g wrangler
```
and then,

```bash
wrangler login
```
If you can log in successfully, create a project with

```bash
wrangler init [project name]
```
 
  

## D1, Drizzle setup
I referred to the following articles.
- <https://zenn.dev/mizchi/articles/d1-drizzle-orm>
- <https://qiita.com/kmkkiii/items/2b22fa53a90bf98158c0>

D1 setup is done with

```bash
wrangler d1 create [database name]
```
and then add the following to wrangler.toml.
    
```bash
[[ d1_databases ]]
binding = "DB" 
database_name = "<your-database-name>"
database_id = "<your-id>"
```

I referred to the following articles for the drizzle setup (I omitted it because it's a bit off topic).


I'm lazy to type wrangler d1 migrations apply dbtest, so I added the following two to package.json.

```diff
"scripts": {
		"deploy": "wrangler deploy",
		"dev": "wrangler dev",
		"start": "wrangler dev",
+		"generate": "drizzle-kit generate:sqlite --out migrations --schema src/db/schema.ts",
+		"migration": "wrangler d1 migrations apply dbtest"
	},
```



## R2 setup

I referred to yusukebe's article for the R2 setup.
<https://yusukebe.com/posts/2022/r2-beta/>

As usual,
```bash
wrangler r2 bucket create [bucket name]
```
to create a bucket and then add it to wrangler.toml.

```bash
[[ r2_buckets ]]
binding = 'BUCKET'
bucket_name = '<your-bucket-name>'
preview_bucket_name = '<your-bucket-name>'
```

## Hono setup

Setup of Hono is done with

```bash
npm create hono@latest
```
and then select

```bash
cloudflare-workers
```
from the options.


# 実装について


I'll just introduce the parts that stand out, as long as they meet the requirements.


First, the implementation of photo posting.

```typescript
app.put('/post', async (c) => {
	const data = await c.req.json<PostData>();
	const base64 = data.key;
	if (!base64) return c.notFound();

	const type = detectType(base64);
	if (!type) return c.notFound();

	const body = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

	let key;

	key = (await sha256(body)) + '.' + type?.suffix;

	if (c.env) {
		const bucket = c.env.BUCKET;
		await bucket.put(key, body, { httpMetadata: { contentType: type.mimeType } });
	} else {
		throw new Error('c.env is undefined');
	}

	const db = drizzle(c.env.DB);
	await db
		.insert(posts)
		.values({
			userId: data.userId,
			title: data.title,
			key: key,
			createdAt: data.createdAt,
			latitude: data.latitute,
			longitude: data.longitude,
			isPublic: data.isPublic,
			isFriendsOnly: data.isFriendsOnly,
			isPrivate: data.isPrivate,
			orientation: data.orientation,
		})
		.execute();
    const result = await db.select().from(posts).where(eq(posts.key, key)).all();
    return c.json({ id: result[0].id, userId: data.userId, title: data.title, key: key });
});
```


To explain in detail,

The photo data comes in base64, so I referred to yusukebe's code and saved it in the bucket.
```typescript
const body = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

	let key;

	key = (await sha256(body)) + '.' + type?.suffix;

	if (c.env) {
		const bucket = c.env.BUCKET;
		await bucket.put(key, body, { httpMetadata: { contentType: type.mimeType } });
	} else {
		throw new Error('c.env is undefined');
	}
```
It's a complete copy. Thank you for yusukebe.


Then, I saved it in the database with the help of drizzle.
```typescript
const db = drizzle(c.env.DB);
    await db
        .insert(posts)
        .values({
            userId: data.userId,
            title: data.title,
            key: key,
            createdAt: data.createdAt,
            latitude: data.latitute,
            longitude: data.longitude,
            isPublic: data.isPublic,
            isFriendsOnly: data.isFriendsOnly,
            isPrivate: data.isPrivate,
            orientation: data.orientation,
        })
        .execute();
```


# 所感
I was able to experience the ease of development using Hono and Cloudflare Workers. As a beginner, I was able to code intuitively and deploy easily, so I think it's perfect for beginners. It's nice to be able to deploy the code I wrote immediately and check it out, and it also helps to keep my motivation up. It's very helpful for me, who is easily bored. **In conclusion, Hono and Cloudflare Workers are the best.**
