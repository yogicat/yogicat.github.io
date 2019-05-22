---
layout: post
title: 파이썬 프로젝트 구조과 구성
categories: blog
tags: programming
date: 2019-05-13 20:45 +0900
---
- 파이썬을 여행하는 히치하이커를 위한 안내서


## Structure

일반적으로 "구성"이란 로직과 의존성이 깔끔한 코드를 만드는 것을 의미할 뿐만 아니라, 파일시스템에 어떻게 파일과 폴더들을 구성하느냐의 문제이다.


#### 추천하는 저장소의 구조

- The Actual Module (folder)
- License (LICENSE)
- Setup (setup.py)
- Requirements File (requirements.txt)
- Documentation (docs)
- Test Suite (tests)

---

#### 장고 어플리케이션에서의 구조

`$ django-admin.py startproject samplesite`

위와 같이 프로젝트를 시작할 경우에는 폴더내에 또 samplesite폴더가 만들어진다. 불필요한 네스팅은 아무런 도움이 되지 않으므로 피하는 것이 좋다.


`$ django-admin.py startproject samplesite .`

이렇게 뒤에 `.`을 찍으면 폴더 내에 폴더를 생성하지 않고 현재 폴더에 프로젝트를 구성할 수 있다.

---

#### 코드 구성의 핵심

*프로젝트가 엉망으로 구성되었을 경우*

- 복잡한 순환 참조
- 숨겨진 연결고리
- 전역 구문의 과다 사용
- 스파게티 코드 (복 & 붙, 조건문과 for문의 반복)
- 라비올리 코드 (구조화 되어있지 않은 비슷한 로직의 코드 반복)


---

#### 모듈

파이썬 모듈은 사용 가능한 주요 추상 레이어 중 하나이자, 추상 레이어의 가장 자연스러운 모습.
추상레이어는 코드를 기능 & 저장 파트로 나눌 수 있게 해준다.

각각의 기능에 따라 파일을 나누어 작성하고 `from ... import`로 해달 모듈을 불러와서 사용한다.

`*`의 사용을 줄이고 원하는 부분만 불러와 전역 네이스페이스에 넣어둘것.

```py
  from modu import sqrt
  x = sqrt(4)
```

혹은

```py
  import modu
  x = modu.sqrt(4)
```

  *가독성은 파이썬의 주요 특징 중 하나이다. 어느 수준까지의 간결성을 얻고자 하는 노력이 필요하나 너무 간결한 나머지 모호해서를 안된다.

---

#### 패키지

파이썬은 아주 간단한 패키지 만들기 시스템을 제공한다.

`__init__.py`가 포함된 최폴더는 파리썬 패키지로 간주되고, 최상위 디텍토리는 루트 패키지가 된다.

패키지의 모듈과 서브-패키지에서 코드를 서로 공유할 필요가 없다면 __init__.py은 빈 파일로 남겨두는게 일반적일 뿐만 아니라 좋은 습관이다.

---

#### 객체지향 프로그래밍

파이썬에서는 모든 게 객체이며, 객체처럼 처리될 수 있다. 이는 함수도 일급 객체라는 의미기도 하다. 파이썬에서는 함수, 클래스, 문자열, 심지어 타입까지 모두 객체다. 이들 모두 타입이 있고, 함수의 인자로 전달될 수 있으며, 메서드와 속성을 가질 수 있다. 이러한 의미에서 파이썬은 객체지향 언어다.

하지만 파이썬의 주 패러다임은 자바와 달리 객체지향 프로그래밍이 아니다. 객체지향으로 만들지 않은 파이썬 프로젝트도 완벽하게 실행 가능하다.


파이썬이 모듈과 네임스페이스를 다루는 방식은, 클래스를 사용하지 않고도 추상화 계층을 직관적으로 캡슐화하고 분리할 수 있다.

일반적으로 웹 애플리케이션과 같은 일부 아키텍처에서는 동시에 발생할 수 있는 외부 요청에 응답하기 위해 여러 인스턴스의 파이썬 프로세스가 생성된다. 이 경우, 현재 상태에 대한 일부 정적 정보가 객체 인스턴스에 담기게 되면 경쟁조건이 발생하기 쉽다. 경쟁조건이란 객체의 상태를 초기화하는 시점과 객체의 상태를 실제로 사용하는 시점 사이에 어딘가에서 객체를 둘러싼 주변 상태 정보가 변화하는 경우를 말한다.(어떤 고정된 정보를 계속 잡고 있게되 동시성의 문제가 경합상황 발생)

이러한 문제를 포함한 여러 문제 때문에 상태가 없는 함수를 선호한다.

가능한 한 모호한 문맥과 부작용을 최소화 한 함수와 프로시저를 사용할것. 전역변수를 아무렇게나 사용하거나, 함수 내부에 있는 퍼시스턴스 레이어의 항목을 남용하면 함수의 의미가 모호해진다. 여기서 부작용이란 함수가 함수를 둘러싼 맥락을 바꿔버리는 변화를 의미한다. 함수가 퍼시스턴스 레이어에 있는 데이터나 전역 변수에 있는 데이터를 날려버리거나 저장해 버린다면, 이런것을 부작용이라고 부른다.

파이썬의 사용자 정의 클래스는 논리가 있는 순수함수에서 문맥과 부수 효과가 있는 함수를 신중하게 분리하는 데 사용해야 한다. 순수 함수는 결정적이다. 즉, 고정된 입력에 대해 늘 같은 값을 반환된다. 이는 순수 함수가 문맥에 의존하지 않고 부수 효과가 없기 때문이다. 예를 들어 print함수는 반환값이 없기 때문에 비순수 함수이며, 표준 출력 값을 쓰는 부수효과가 있다.


**순수함수의 장점**

- 순수 함수는 리팩터링이나 최적화를 위한 변경과 대체가 훨씬 쉽다.
- 순수 함수는 유닛 단위 테스트가 더 쉽다. 복잡한 문맥 설정과 데이터 정리가 덜 필요하다.
- 순수 함수는 작업하기 편하고, 데코레이터를 사용하기 쉽고, 전달이 쉽다.


일부 아키텍처에서는 순수 함수가 클래스와 객체보다 효율적인 빌딩 블록이 된다. 문맥이나 부작용이 없기 때문이다.
