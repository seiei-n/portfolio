---
title: "ポートフォリオサイトをNextJSで実装してみた"
date: "2023-05-12"
slug: "making-portfolio"
description:
author:
thumbnail:
tags: "Web","Next","React"
type: "blog"
lang : "ja"
---

# 経緯

私自身、Web に明るい人間ではなかったが、これからエンジニアとして活動していくにあたり、最低限のスキルと考えたため、比較的新しい技術スタックを用いてポートフォリオサイトを作成することにした。

# 技術スタック
- Next.js
- TypeScript
- Vercel Storage

主にこれらの技術を用いて実装を行った。

## 選定理由
ポートフォリオサイト兼、ブログサイトであるため、SSRないしはSSGを使いたかった。現状、NextJSとNuxtJSが2台巨頭となっており、どちらも経験があったが、NextJSの方が好みであり、.tsx記法の将来性も考えて、NextJSを採用した。また、開発の元締めであるVercelで簡単にホスティングでき、Vercel Storageも使えるため、NextJSに軍牌が上がった。



# 実装内容
