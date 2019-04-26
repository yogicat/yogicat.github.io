---
layout: post
title: 파이썬 리스트 comprehensions
date: 2019-04-26 19:51 +0900
categories: blog
tags: algorithm
---



### Problem

You are given 3 integers X, Y and Z representing the dimensions of a cuboid along with an integer N.  You have to print a list of all possible coordinates given by (I, j, k) on a 3D grid where the sum of `I+j+k` is not equal to `N`

### Input
```py
1
1
1
2
```

### Output

```py
[[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
```


- - - -

List Comprehension을 사용하여 푼다.
Input으로 주어지는 x, y, z는  x, y, z를 포함하므로  x+1, y+1, z+1이 되고,
`i+j+k != N`

```py
x = int(input())
y = int(input())
z = int(input())
n = int(input())

print([
        [i, j, k]
        for i in range(x + 1)
        for j in range(y + 1)
        for k in range(z + 1)
        if (i + j + k != n)
])

```

