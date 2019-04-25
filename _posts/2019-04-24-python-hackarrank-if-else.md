---
layout: post
title: 파이썬 If Else
categories: blog
tags: algorithm
date: 2019-04-24 12:06 +0900
---

#### Task

Given an integer, `n`, perform the following conditional actions:

- 홀수일 경우, print `Weird`
- 짝수이고 2보다 크거나 같고 5보다 작거나 같으면, print `Not Weird`
- 짝수이고 6보다 크거나 같고 20보다 작거나 같으면, print `Weird`
- 짝수이고 20보다 크면, print `Not Weird`


`Weird`가 나올 경우와 `Not Weird`가 나올 경우로 생각해보면,

- `Not Weird` - 짝수 and (2와 5사이 or 20보다 클경우)
- `Weird` - 위의 경우를 제외한 경우


```py

N = int(input())

if N % 2 == 0 and (N in range(2, 6) or N > 20):
    print('Not Weird')
else:
    print('Weird')

```


또 다른 방법으로는 True, Flase를 키로 하는 딕셔너리를 만들어서 값을 반환하게 할 수도 있다.

```py

result = {True: 'Not Weird', False: 'Weird'}
print(result[N % 2 == 0 and (N in range(2,6) or n > 20)])

```

