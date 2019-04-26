---
layout: post
title: 파이썬 Runner Up Score
date: 2019-04-26 19:54 +0900
categories: blog
tags: algorithm
---


**Input Format**
The first line contains `n`. The second line contains an array  `A[]` of  `n` integers each separated by a space.

**Output format**
Print the runner-up score.

- - - -

### First solution

```py
n = int(input())
arr = map(int, input().split())

# 1
print(sorted(set(arr))[-2])
# 1 - 2
print(sorted(set(arr), reverse=True)[1])
```

`set`은 중복된 요소를 제거할 수 있고 `sorted`는 iterable 한 요소를 정렬 해준다.
set와 sorted를 사용하지 않고 해결해보자.

```py
maxnum = max(arr)
for i in range(n):
	if maxnum == max(arr):
		arr.remove(max(arr))
print(max(arr))
```

기존 배열에서 최대값을 구해놓은 뒤, 배열을 돌면서 최대값과 (중복값)을 제거한 뒤, 남은 배열의 최대값 = 곧, Runner up score인 두번째  구하는 방법이다.

