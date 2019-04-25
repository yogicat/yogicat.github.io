---
layout: post
title: "ZSH에서 PROMPT설정하기"
categories: blog
tags: programming
---

![terminal](/uploads/Screen-Shot-2019-04-09.png)

터미널 초기상태에서 늘 거슬리는 부분이 있다면 `yogicats-MacBook-Pro:yogicat ~ $` 이부분!
작업하면서 경로를 파고들어 가다보면 터미널에 경로만 한줄 꽉 차는 경험이 있을 것이다. 맥북프로라도 지우고 싶어서 알아보다가 zsh설정에서 기본 쉘언어을 조금만 조합하면 금새 커스터마이징이 가능하다는 것을 발견했다.

일단 터미널을 켜면 나오는 `yogicats-MacBook-Pro:yogicat ~ $` 이부분은 `PROMPT`라고 부른다.
(bash를 사용한다면 PS1, zsh을 사용한다면 PROMPT - 두개가 설정방법이 다르니 잘 모른다면 꼭 `which` 로 어떤 쉘을 사용하고 있는지 확인해볼 것)

zsh을 사용하고 있다면, 왠만한 테마 패키지들은 PROMPT를 깔끔하게 정리해 주는 편이다. 하지만 간단하게 PROMPT만 정리하고 싶다면 `.zshrc`에 값을 세팅해서 해결할 수있다.

oh-my-zsh의 테마를 사용하면 금방 바꿀 수 있는데 이때도 PROMPT를 설정하는 방식이다.



```shell

  PROMPT='%F{cyan}%~ %f'

  # PROMPT='$F{cyan}%m: $F{yellow}%~ $'
  # 호스트이름과 경로를 표시하는 경우

```

간단하게 `%~` 을 통해 현재 경로를 파란색으로 나타낼 수 있다. 이후의 입력값은 기본색으로 나오도록 `%f`으로 색의 설정값을 다시 설정해준다.
구글을 검색해보면 엄청 많은 명령어를 찾을 수 있고, 함수를 활용해 테마에 있는 화려한 스타일또한 가능하다.


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

