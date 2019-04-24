---
layout: post
title: 알고리즘 파이썬 Leap Year
categories: blog
tag: algorithm
date: 2019-04-24 12:06 +0900
---
Hackerrank Python Leap Year

#### Task

그레고리안 캘린더에 따른 윤년 체크하는 함수 작성하기

- The year can be evenly divided by 4, is a leap year, unless:
- The year can be evenly divided by 100, it is NOT a leap year, unless:
- The year is also evenly divisible by 400. Then it is a leap year.


4로 나누어 떨어진다 and (100으로 나누어 떨어지지 않는다 or 400으로 나누어 떨어진다.)


```py
def is_leap(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
```

