---
title: "Making Portfolio Site with Next.js"
date: "2023-05-12"
slug: "making-portfolio"
description:
author:
thumbnail:
tags: "Web","Next","React"
type: "blog"
lang : "en"
---


# Background

I was not familiar with Web, but I decided to create a portfolio site using a relatively new technology stack because I thought it was the minimum skill to work as an engineer in the future.

<br><br>

# Technology Stack
- Next.js
- TypeScript


## Reason for selection
I wanted to use SSR or SSG because it is a portfolio site and a blog site. Currently, NextJS and NuxtJS are the two giants, and I had experience with both, but I preferred NextJS and chose NextJS because of the future of .tsx notation. Also, it was attractive that it could be easily deployed on Vercel.

<br><br>

# Implementation

## Toggle button

On PC display, a toggle button for dark mode and language switching is displayed in the upper right corner of the screen, and on smartphone display, it is displayed in the hamburger menu. The point I was particular about was that I realized this function by switching CSS without reloading. Also, the user can display the most suitable display by referring to the browser's language and dark mode settings when accessing for the first time. Also, by using useLayoutEffect, flickering when reloading is prevented.

<br>


## Blog function

Blog articles are managed using markdown files. The blog article is displayed by converting markdown to HTML using unified (remark, rehype). Also, code blocks can be highlighted using Prism.js.

Example of code highlight
```cpp

// Function to calculate Fibonacci sequence
int fib(int n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n-1) + fib(n-2);
}
```

<br>

## Tag function

By describing the tag in the frontmatter of markdown, the tag function is implemented. By clicking on the tag displayed on the card of the blog article, you can display the article associated with the tag.

<br>

## Others

I tried to avoid depending on libraries as much as possible when creating the site this time. Therefore, I made breadcrumbs, hamburger menus, blog article cards, etc. myself.

<br><br>


# Summary

I had almost no experience with TypeScript and NextJS, but I was able to implement it relatively easily. In the future, I would like to add blog articles and improve the design of blog article cards.


