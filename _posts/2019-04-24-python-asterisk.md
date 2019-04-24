---
layout: post
title: 파이썬에서 *asterisk**
date: 2019-04-24 20:28 +0900
categories: blog
tag: programming
---



파이썬에서 `*`는 수학적 용도 이외에도 다양한 곳에 사용할 수 있다.
(도큐먼트에서 뭘 찾아보기가 너무 어렵다ㅠㅠ 어렵게 찾아냄..)

- 함수에서 인자로 리스트를 unpacking 할때 (unpacking argument lists)
- assignment의 왼쪽 사이드에서 unpacking하기 [링크](https://www.python.org/dev/peps/pep-3132/) (파이썬 3.0부터)
- iterable이나 딕셔너리의 unpacking [링크](https://www.python.org/dev/peps/pep-0448/) / [링크2](https://docs.python.org/3/whatsnew/3.5.html#whatsnew-pep-448) (파이썬 3.5부터)

---

## Unpacking Argument Lists

먼저 함수 호출 시 인자로 주어진 리스트를 unpacking 할 수 있다. 흔히 볼 수 있는 케이스가 `*argv` 가 아닐까 싶다. 딕셔너리에서 Key를 unpacking 하려면 `**kwargs`를 쓰면 된다.

```py
def foo(*args, **kwargs):
    # something
```

이렇게 하면, 매개변수의 갯수를 제한해 두지 않고 받을 수 있다.


## Extended Iterable Unpacking

할당문에서 왼쪽편에서 iterable unpacking을 할 수 있다.

```py
a, *b, c = range(5)
# a - 0
# b - [1, 2, 3]
# c - 4
```

for문 안에서 튜플을 implicit 할당할때도 사용할 수 있다. (짱 신기!)

```py
for a, *b in [(1,2,3),(4,5,6,7)]:
  print(b)

# [2, 3]
# [5, 6, 7]
```


## Additional Unpacking


코딩퀴즈 풀다가 알게된 마지막 사용법은, 튜플과 리스트를 unpacking 할 수 있는 방법이다.
자바스크립트의 `...` rest/spread 랑 비슷한데 일단 *별표라서 더 심플한듯.

```py
print(*[1,2], *[3,4,5])
# 1 2 3 4 5
```

딕셔너리는 `**` 두개를 사용해서 unpacking 할 수 있다.

```py
print({**{'x': 1}, **{'y': 3, 'z': 4}})
# {'x': 1, 'y': 3, 'z': 4}
```

딕셔너리를 `*`만 사용하면, 키값만 unpacking 할 수 있다. 짱짱!

```py
print([*{1:2,3:4}, 5, 7])
# 1, 3, 5, 7
```


또한 튜플, 리스트, 세트, 딕셔너리를 다양하게 멀티플 unpacking을 할 수 있다!

```py
print(*range(4), 4)
# 0, 1, 2, 3, 4,

print([*range(4), 4])
# [0, 1, 2, 3, 4]

print({*range(4), 4, *(5, 6, 7)})
# {0, 1, 2, 3, 4, 5, 6, 7}

```

