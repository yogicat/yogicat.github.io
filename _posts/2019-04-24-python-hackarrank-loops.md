---
layout: post
title: 알고리즘 파이썬 Loop
categories: blog
tag: algorithm
date: 2019-04-24 12:06 +0900
---
Hackerrank Python Loop

#### Task

- i < N 에 해당하는 i를 모두 i^2으로 출력
- 예시 5가 주어지면, 0,1,2,3,4 에 해당하는 i를 제곱해서 출력

**Input**
```
5
```

**Output**

```
0
1
4
9
16
```

풀이

```py
for i in range(0,n):
    print(i**2)
```


리스트로 만들어 출력하기

```py
print([i**2 for i in range(n)])
# [0, 1, 4, 9, 16] 이렇게 출력됨

```
