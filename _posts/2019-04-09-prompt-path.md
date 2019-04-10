---
layout: post
title: "ZSH에서 PROMPT 깔끔하게 바꾸기(+hyper)"
categories: blog
tag: programming
---

![terminal](/uploads/Screen-Shot-2019-04-09.png)

맥의 기본 터미널 대신 거의 [iterm](https://www.iterm2.com/)만 사용하다가 최근 [hyper](https://hyper.is) 라는 자바스크립트로 만들어진 터미널 앱을 발견하고 사용중이다. 맥에 기본 터미널보다 더 맥이랑 잘 어울리는 것 같아서 굉장히 만족스럽다. 오픈소스로 만들어져 무료로 사용할 수 있고 가장 흥미로운 부분은 구글 개발자 툴로 디버깅을 해볼 수 있는 것이었다.

터미널에서 늘 거슬리는 부분이 있다면 `yogicats-MacBook-Pro:yogicat ~ $` 이부분!
작업하면서 경로를 파고들어 가다보면 터미널에 경로만 한줄 꽉 차는 경험이 있을 것이다. 맥북프로라도 지우고 싶어서 알아보다가 zsh설정에서 기본 쉘언어을 조금만 조합하면 금새 커스터마이징이 가능하다는 것을 발견했다.

일단 터미널을 켜면 나오는 `yogicats-MacBook-Pro:yogicat ~ $` 이부분은 `PROMPT`라고 부른다.
(bash를 사용한다면 PS1, zsh을 사용한다면 PROMPT - 두개가 설정방법이 다르니 잘 모른다면 꼭 `which` 로 어떤 쉘을 사용하고 있는지 확인해볼 것)

zsh을 사용하고 있다면, 왠만한 테마 패키지들은 PROMPT를 깔끔하게 정리해 주는 편이다. 하지만 간단하게 PROMPT만 정리하고 싶다면 `.zshrc`에 값을 세팅해서 해결할 수있다.


가장 먼저 기본적으로 설정해 주어야 하는 세팅값이있다.

```shell

  setopt PROMPT_SUBST
  PROMPT='%F{cyan}%~ %f'

  # PROMPT='$F{cyan}%m: $F{yellow}%~ $'
  # 호스트이름과 경로를 표시하는 경우

```

천번째 줄 - option을 세팅하는 명령어로, PROMPT_SUBST은 PROMPT에서 커맨드를 대체하거나, 파라미터 확장등 좀 더 확장시켜 쓸 수 있게 해주는 값이다.
그다음줄은 간단하게 `%~` 을 통해 현재 경로를 파란색으로 나타낼 수 있다. 이후의 입력값은 기본색으로 나오도록 `%f`으로 색의 설정값을 다시 설정해준다.


기본 PROMPT값들을 살펴보면
- `%M` - Full machine hostname
- `%m` - Hostname up to the first '.'
- `%n` - Username

색깔을 줄수 있는 값들은 다음과 같다
- `%F` - Start using a color
- `%f` - Stop using color (default color)
- `%F{cyan}` - 이제부터 cyan값을 사용한다.
- `%U` - Start underline mode

이런 값들을 조합해서 원하는 PROMPT를 만들어 낼 수 있다.

