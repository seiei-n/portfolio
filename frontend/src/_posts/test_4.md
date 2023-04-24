---
title: "ダイクストラアルゴリズムとは？"
date: "2023-04-20"
slug: "what-is-dijkstra-algorithm"
description: "ダイクストラアルゴリズムについての説明とその応用例について解説します。"
author: "John Smith"
thumbnail: "https://example.com/image.png"
tags: ["ダイクストラアルゴリズム", "グラフ理論", "アルゴリズム"]
type: "blog"
---

# ダイクストラアルゴリズムとは？

ダイクストラアルゴリズムは、グラフ理論において最短経路を求めるためのアルゴリズムです。ダイクストラアルゴリズムは、ある始点から他の全ての頂点への最短経路を求めることができます。

## ダイクストラアルゴリズムの流れ

1. 始点から各頂点までの距離を無限大、始点自身を0とする。
2. 始点から最も距離の近い頂点を選び、その頂点から直接つながっている頂点までの距離を計算する。
3. 計算した距離が現在の距離よりも小さい場合、距離を更新する。
4. 2と3を繰り返し、全ての頂点への距離を求める。

## ダイクストラアルゴリズムの実装

以下はPythonでのダイクストラアルゴリズムの実装例です。

```python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    queue = [(0, start)]

    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if current_distance > distances[current_node]:
            continue
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))

    return distances

```
