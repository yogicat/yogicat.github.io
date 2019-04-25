---
layout: post
title: 파이썬 처음 환경세팅하기
categories: blog
tag: programming
date: 2019-04-25 21:04 +0900
---

파이썬 다운그레이드와 가상환경 설정에 대해 정리해보았다.


## 파이썬 다른버전 설치하기

`brew`로 파이썬을 설치하면 기본적으로 가장 최신 stable 버전이 설치된다.
현재 설치되는 버전인 Python 3.7.3에서  Python 3.6.5로 설치하는 방법에 대해 알아보았다.


가장 간단한 방법은 `brew`를 통해서 formula링크로 원하는 버전을 설치하는 방법이다. formula는 brew를 통해 설치할 수 있는 패키지의 정보와 가이드를 제공한다. 구글 검색으로  Python 3.6.5버전에 해당하는 formula링크를 찾을 수 있었다.

```py
brew unlink python  # 현재 파이썬 링크 해제

brew install --ignore-dependencies https://raw.githubusercontent.com/Homebrew/homebrew-core/f2a764ef944b1080be64bd88dca9a1d80130c558/Formula/python.rb
# python 3.6.5 버전을 설치할 수 있다.

brew switch python 3.6.5
# 3.7.3 버전으로 스위치 할 수도 있다.

python3 --version
# 3.6.5 로 변경된 것을 확인할 수 있다.
```

이렇게하면 버전이 많아질 경우 그때 그때 switch를 해야한다는 단점이 있을 수 있겠지만, switch할 상황이 적은 나같은 경우에는 나쁘지 않은 방법인거 같다.

그 외에 찾을 수 있는 다른 방법으로는, [pyenv](https://github.com/pyenv/pyenv)라는 툴을 사용해서 pyenv에 의해 버전을 바꾸는 방식이다.
설치해서 해보려고 했는데, brew로 설치한 파이썬이 있어서 꼬이는 일이 생겨서 성공하지 못했다.
여러 버전을 왔다 갔다 해야하는 상황이라면 편리할 것 같다.. 다만 맥 mojave에서는 인스톨 에러가 있어서 [wiki](https://github.com/pyenv/pyenv/wiki)를 보고 설치해야 원활하게 사용할 수 있다.


---

## 가상환경

가상환경은 프로젝트의 dependencies가 담겨진 독립된 컨테이너를 제공한다. 이렇게 프로젝트마다 가상환경을 설정하면 프로젝트의 특성에 따라 다양한 버전을 가진 환경을 충돌없이 만들 수 있다. nodejs에서 `npm`, `yarn`과 같은 개념이다.


### PIP
`pip`는 nodejs의 npm 같이 파이썬 패키지를 설치하고 관리하는 도구이다.
파이썬에는 또 다른 내장된 `easy_install`이라는 패키지 매니저가 있는데 pip가 기능적으로 훨씬 좋다고 하니 pip을 사용해보자. nodejs환경에서 `npm install`처럼 사용하면 된다. (버전에 따라 `pip3`이 될 수 있으니  `which python`과 `python -V`로 실행해 현재 `python`위치와 버전을 확인할 것.)

### Virtualenv [링크](https://virtualenv.pypa.io/en/stable/)
첫번째로 설치할 패키지는 virtualenv로 여러개의 다양한 버전의 파이썬 프로젝트를 컴퓨터에 설정할 수 있게 도와준다. 가상환경에서 설치한 패키지는 `site-package`폴더안에 설치된다.

```py

pip3 install virtualenv
# 가상환경 구축을 위해 필요한 virtualenv를 설치한다.
# 작업 환경 디렉토리에 가상환경을 구축한다.

virtualenv -p python3 .
# 현재 폴더에 파이썬3 버전으로 설치

virtualenv venv
# venv라는 디렉토리에 설치, 이때는 기본 디폴트 파이썬이 설치됨

source bin/activate
# 가상환경을 활성화시킨다.

pip install django==2.0
# 설치를 원하는 버전입력

pip freeze
#  nodejs에서 package-lock과 유사한 기능인듯하다.

deactivate
# 가상환경을 비활성화
```

- - - -

### pipenv를 사용한 가상환경

[Pipenv: documentation](https://docs.pipenv.org/en/latest/)

책을 읽다가 찾은 가상환경을 구축하는 또 다른 방법. `pipenv` 는 2017년에 나온 파이썬에서 공식적으로 추천하는 패키지 툴이다.  `pipenv`를 사용하면 자동적으로 가상 환경을 구축해주고, 패키지 관리를 위한 `pipfile`과 패키지 락을 관리하는 `pipfile.lock`을 제공한다.


```py
pip3 install pipenv`
# pipenv를 설치한다. (brew로도 인스톨 가능하다.)

pipenv shell
# 작업 디렉토리에 가상환경을 구축한다.

pipenv install django=2.0
# 작업 디렉토리로 이동해 장고를 설치한다.
```

---

버전관리는 어느 언어나 참 모두의 고민인가보다. 자바스크립트에서만 그런줄 알았는데 파이썬은 가상환경이란 놈까지 더해져서 세팅하는데 생각보다 많은 삽질을 했다ㅋㅋ


🤯 🤯 🤯


![python environment](https://imgs.xkcd.com/comics/python_environment.png)
