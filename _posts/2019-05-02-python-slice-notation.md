---
layout: post
title: 파이썬 슬라이스 노테이션
date: 2019-05-02 09:46 +0900
categories: blog
tags: algorithm
---

### 슬라이스 노테이션 정리.

```py
a[start:stop]   # slice start ~ (stop-1)
a[start:]       # slice start ~ rest
a[:stop]        # slice biginning ~ (stop-1)
a[:]            # (shallow) copy of the whole array
```

**negative values**

```py
a[-1]   # last item in the array
a[-2:]  # last 2 teims in the array
a[:-2]  # everything except the last 2 item (start ~ last two)
```

**step value**

```py
a[start:stop:step]  # start through (stop-1) by step
```

**negative steps**

```py
a = [1,2,3,4,5]
a[::-1]     # whole array, reversed [5,4,3,2,1]
a[1::-1]    # start 1 reversed (step -1)  [2,1]
a[:-3:-1]   # stop at -3 reversed [5,4]
a[-3::-1]   # from -3 reversed [1, 2, 3]
```

---

**understanding Indexing**

```py
  -6  -5  -4  -3  -2  -1
   0   1   2   3   4   5
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 :   1   2   3   4   5   :
 :  -5  -4  -3  -2  -1   :
```

