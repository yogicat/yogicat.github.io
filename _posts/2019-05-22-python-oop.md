---
layout: post
title: 파이썬 Object Oriented Programming
categories: blog
tags: programming
date: 2019-05-22
---

- MIT 6.0001 - 8강 정리한것
- [6.0001 Introduction to Computer Science and Programming in Python](https://youtu.be/-DP1i2ZU9gk)

---


### 파이썬에서의 객체 지향 프로그래밍

- 파이썬의 모든것은 객체이고 타입이 있다. Everything in Python is an object (and has a Type)
- 특정 타입을 가진 새로운 객체를 생성할 수 있다. can create new objects of some type
- 객체를 조작할 수 있다. can manipulate objects
- 객체를 없앨 수 있다. can destroy objects
    - `del` 을 사용해 명시적으로 혹은 재할당등을 통해 - explicitly using `del` or just "forget" about them (just reassign to another value)
    - 파이썬 시스템은 가비지 컬렉션 통해 삭제되거나 접근할 수 없는 객체들을 정리한다. python system will reclaim destroyed or inaccessible objects - "garbage collection"


### 객체란 무엇인가

- 데이터의 추상화이다.
    - 데이터 속성을 통한 내부적인 개념
    - 객체와 인터렉션을 위한 인터페이스 (메서드를 통해)

### 클래스를 이용해 타입 만들고 사용하기

- 클래스 생성
    - 클래스 이름의 정의
    - 클래스 속성의 정의

- 클래스 사용
    - 객체의 새로운 인스턴스 생성

### 사용자 타입 정의

- `class` 키워드를 통해 새로운타입을 정의  `class Coordinate(object) :`
    - `(object)` 의미 - 파이썬 *객체* 를 *inherit*한다.
    - `Coordinate`는 `object`의 하위 클래스

### Attributes(속성)는 무엇인가

- 클래스에 속한 데이터 혹은 절차
- 데이터 속성
    - 클래스를 만들기 위한 객체라고 이해할 수 있다.
    - 예를들어 Coordinate는 x와 y라는 두개의 숫자로 만들어짐
- 메서드 (절차 속성 - procedural attributes)
    - 해당 클래스에서만 작동하는 함수라고 이해할 수 있다.



### 클래스의 인스턴스 생성을 위한 정의

- 어떻게 객체의 인스턴스를 생성할 것인지 정의
- `__init__` 이라는 특별한 메서드를 통해 데이터 속성을 초기화 설정

    class Coordinate(object):
    		def __init__(self, x, y):
    				self.x = x
    				self.y = y

- x, y - Coordinate객체를 초기화 하기 위해 필요한 데이터
- self - 클래스 인스턴스를 가르키는 매개변수



### 클래스 인스턴스 생성하기

```py
    c = Coordinate(3, 4)
    print(c.x)
```

- 인스턴스의 데이터속성(attribute)는 인스턴스 변수(instance variable)이라고 함
- 파이썬이 자동적으로  `self` 를 해결한다. (넘겨줄 필요없음)

### 메서드는 무엇인가

- 절차 속성, 해당 클래서에서만 작동하는 함수와도 같은 것
- 파이썬은 첫번째 인자로 객체를 넘겨준다.
    - `self` 로 써주는 것이 컨벤션
- `.` 을 통해 속성에 접근할 수 있다.
    - 데이터 혹은 메서드

### 매서드 정의하기

```py
# 정의하기
class Coordinate(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def distance(self, other):
        x_diff_sq = (self.x - other.x) ** 2
        y_diff_sq = (self.y - other.y) ** 2
        return (x_diff_sq + y_diff_sq) ** 0.5

# 사용하기
c = Coordinate(3, 4)
zero = Coordinate(0, 4)
print(c.distance(zero))
```

- `self` 와 `.` 을 제외하면 기존 함수와 똑같이 동작한다.

### Special Operators

- +, -, ==, <, >, len(), print 등
- 기본 매서드를 덮어쓸 수 있다

```py
__add__(self, other)    -> self + other
__sub__(slef, other)    -> self - other
__eq__(self, other)     -> self == other
__lt__(self, other)     -> self < other
__len__(self)           -> len(self)
__str__(self)           -> print self
```

### Print Method 정의하기

```py
class Coordinate(object):
  ...
  def __str__(self):
      return "<"+str(self.x)+","+str(self.y)+">"
```

### 정리

- bundle together objects that share
  - common attributes and
  - procedures that operate on those attributes
- use abstraction to make a distinction between how to implement an object vs how to use the object
- build layers of object abstractions that inherit behaviors from other classes of objects
- create our own classes of objects on top of Python's basic classes
