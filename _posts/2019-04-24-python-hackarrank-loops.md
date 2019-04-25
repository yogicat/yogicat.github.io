---
layout: post
title: 파이썬 Loop
categories: blog
tags: algorithm
date: 2019-04-24 12:06 +0900
---

Hackerrank에서 파이썬 퀴즈를 풀고 있다. 푸는것도 재밌는데 Discussion 뒤적거리는 재미가 쏠쏠하다.

#### Task

- i < N 에 해당하는 i를 모두 i^2으로 출력
- 예시 5가 주어지면, 0,1,2,3,4 에 해당하는 i를 제곱해서 출력

**Input**
```
5
```

**Output**

한 줄에 하나씩 출력하기
```
0
1
4
9
16
```

**첫번째 풀이**

```py
for i in range(0,n):
    print(i**2)
```


**다른 풀이 방법**

```py
print(*[i**2 for i in range(n)], sep="\n")
```

1. `[i**2 for i in range(n)]` - [0, 1, 4, ..] 리스트로 만들고
2. `*[list]` - 리스트를 unpacking해서 출력


