---
layout: post
title: node에서 cli앱을 위한 arguments작업
categories: blog
tags: programming
date: 2019-04-12 14:08 +0900
---


node환경에서 CLI앱은 커맨드의 `arguments`를 처리해서 다양한 기능을 만들 수 있다.

`$ test-app hello world again`

뒤에 붙는 `hello`와 `world`, `again`을 가져오기 위해서는 `process.argv`로 접근해야 한다.

`process`는 노드의 글로벌 오브젝트로 현재 노드 프로세스에 대한 다양한 정보를 담고있다.

`process.argv`는 `arguments vector`로 커맨드라인 인자에 대한 정보를 담고있는 배열이다. [0]에는 node자체의 path를 담고있고, [1]에는 실행하는 스크립트 코드의 위치를 담고있으며 [2]부터가 실제 타이핑된 명령어의 내용을 담게 된다.
따라서 0,1을 제외한 필요한 부분인 2번째부터 slice해서 확인할 수 있다.

```
  0: node의 path - /usr/local/bin/node
  1: ~~~/dev/test/index.js
  2: hello
  3: world
  4: again
```

보통 cli앱을 만들때는 `input`이랑 `--`가 붙는 `flags`값으로 원하는 액션을 처리할 수 있다. 이를 처리하려면 앞에서와 같이 argv를 적절히 가공해서 사용하면 된다. 라이브러리를 사용하면 좀 더 쉽게 사용할 수 있다. `commander`, `yargs`, `meow`, `minimist` 가 그런 라이브러리이고 그중에 `meow`랑 `minimist`는 가장 최소한의 기능을 제공하고 사용법도 간략하기 때문에 작은 앱을 만들때 적합하다.

나는 `meow`가 가장 편리하게 느껴졌다.

`$ app.js hello --location seoul `

```js
  const cli = meow(`
    // help명령어에서 보여줄 사용법을 적는다.
    Usage
      $ app hello --location seoul
  `)

  app(cli.input[0], cli.flags)
  // cli.input[0]은 hello를 담고있고
  // cli.flags는 location oject를 담고있다. {location: seoul}
```

- `input` 배열은 --플래그가 없는 명령어를 담고 있다.
- `flags` 는 오브젝트로 --flag 뒤에 아무런 값이 없으면 boolean값을 반환한다.


처음에는 아무런 라이브러리 없이 만들어 보고, 그 후에 meow나 commander등을 사용해볼것을 추천한다. 대부분의 간단한 개인적인 앱들은 meow나 아예 라이브러리 없이도 구현이 가능하다. 여기에 `chalk`만 더하면 보기에도 좋은 앱을 만들 수 있다.

`meow` 랑 `chalk`는 진짜 최고다 👍

---

### 링크

- [MEOW](https://www.npmjs.com/package/meow)
- [Commander.js](https://www.npmjs.com/package/commander)
- [Minimist](https://www.npmjs.com/package/minimist)
- [Yargs](https://www.npmjs.com/package/yargs)
- [Chalk](https://www.npmjs.com/package/chalk)
