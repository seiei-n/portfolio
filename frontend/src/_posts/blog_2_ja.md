---
title: "モバイルアプリのバックエンドをHono+Cloudflare Workersで実装した話"
date: "2023-12-18"
slug: "hono-mobile-backend"
description: "HonoとCloudflare Workersを用いて、モバイルアプリのバックエンドを実装した話"
author: "Seiei Nagahama"
thumbnail:
tags: "Web","Hono","Cloudflare Workers","D1","R2","Drizzle"
type: "blog"
lang : "ja"
---


# 経緯
私が通っている大学の授業の一環として、iosアプリのチーム開発を行っています。そのアプリでバックエンドが必要になり、せっかくなので今アツい技術スタックを使ってみたい！！！ということで、HonoとCloudflare Workersを使ってバックエンドを実装しました。といってもMVPなので、大層なことはしていません。


# 使用スタック

- [Hono](https://hono.dev/)

言わずもがなですね。

- [Cloudflare Workers](https://workers.cloudflare.com/)

これもそう。

- [Cloudflare D1](https://developers.cloudflare.com/d1/)

データベースが欲しかったので使いました。

- [Drizzle](https://orm.drizzle.team/)

D1にも対応しているTypeScriptのORMです。アツい。

- [Cloudflare R2](https://developers.cloudflare.com/r2/)

今回のアプリの要件として、写真の投稿があったので、その保存先として使いました。


# セットアップ

## Wrangler

Cloudflare Workersを使っているので、Wranglerのセットアップが必要。
とりま、

```bash
npm install -g wrangler
```
して、

```bash
wrangler login
```
をする。無事にログインできたら、
```bash
wrangler init [project name]
```
でプロジェクトを作成します。  
  

## D1,Drizzleのセットアップ
私は、以下の記事を参考にしました。
- <https://zenn.dev/mizchi/articles/d1-drizzle-orm>
- <https://qiita.com/kmkkiii/items/2b22fa53a90bf98158c0>

D1のセットアップは、

```bash
wrangler d1 create [database name]
```

で出来ちゃいます。
あとはwrangler.tomlに、追加するだけ。
    
```bash
[[ d1_databases ]]
binding = "DB" 
database_name = "<your-database-name>"
database_id = "<your-id>"
```

drizzle周りのセットアップは参考の記事に書いてある通りです(本題から若干外れるので割愛)。

migrationのコマンドを打つのが面倒なので、package.jsonに以下の二つを追加しました。
```diff
"scripts": {
		"deploy": "wrangler deploy",
		"dev": "wrangler dev",
		"start": "wrangler dev",
+		"generate": "drizzle-kit generate:sqlite --out migrations --schema src/db/schema.ts",
+		"migration": "wrangler d1 migrations apply dbtest"
	},
```



## R2のセットアップ
R2のセットアップは、yusukebeさんの記事を参考にしました。
<https://yusukebe.com/posts/2022/r2-beta/>

例の如く、
```bash
wrangler r2 bucket create [bucket name]
```
でバケットを作成して、

wrangler.tomlに追加します。

```bash
[[ r2_buckets ]]
binding = 'BUCKET'
bucket_name = '<your-bucket-name>'
preview_bucket_name = '<your-bucket-name>'
```

## Honoのセットアップ

Honoのセットアップは、
```bash
npm create hono@latest
```
を叩いて、選択肢のうち
```bash
cloudflare-workers
```
を選択します。そうすれば色々生成されるので、src/に色々書いていけばおkです。


# 実装について

要件に沿って実装していけばいいので、特出するところだけ紹介します。

まず、写真の投稿の実装ですが、
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
という感じです。

詳しく説明すると、

写真のデータはbase64で来るので、yusukebeさんのコードを参考にして、バケットに保存しています。
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

まるパクリですね。ありがとうございます。

あとは、drizzleの恩恵に預かって、データベースに保存しています。
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
モバイルアプリじゃなくてもいいやんというツッコミはさておき、HonoとCloudflare Workersを使ってみて、開発体験の良さを実感しました。初心者の私が直感的にコーディングできて、デプロイも簡単なので、入門には最適だと思います。書いたコードを即座にデプロイして、動作確認ができるのは気持ちがよく、モチベーションの維持にも繋がると思います。何かと飽き性な筆者には、とてもありがたいです。**結論、HonoとCloudflare Workersは最高です。**
