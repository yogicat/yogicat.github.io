---
layout: post
title: "Node.js 기본개념"
categories: Blog
tag: programming
---

맨날 해야하는? 귀찮은 일이 있는데 커맨드라인 앱을 만들어서 해결하고자 node를 공부하게 되었다.

[frontendmasters](https://frontendmasters.com)에서 Node에 대한 기본 개념 코스를 들었다.
생각보다 도움이 많이 되었고, 들으면서 적었던 것들을 정리하였다.
듣고 나니까 리액트를 쓸때 webpack 설정 부분들이 어디서 튀어나온 것들인지 드디어 알 수 있었다.
각종 프레임워크나 라이브러리들을 사용해 개발한다면, 노드에 대한 기본 개념은 꼭 알아두는게 좋은 것 같다.

---


* Environment to run JavaScript outside a browser
* Built on Chrome's V8 JavaScript engine
* Created by Ryan Dahl in 2009

- - - -

### What can I create with Nodejs?

* Tooling (build, automation - webpack, gulp, etc)
* API's (REST, Realtime, GraphQL, etc)
* CDNs
* Shareable Libraries
* Desktop Applications (Electron, etc)
* IoT (Johnny Five, etc)

- - - -

### Installing Node

* Using NVM(node version manager)!!

  * recommended
  * allows you to run many versions of Node whenever

* From Nodejs Source

  * easiest way to install
  * limits your options for have many versions of Nodejs
  * can cause permission errors

- - - -

### Running Nodejs code

* Interactive REPL (Read, Evaluate, Print, Loop)
	* testing, playing
	* start by just typing `$ node`

* CLI Executable
	* `$ node somefile.js`

**REPL for playing around, CLI for everything else!**

- - - -

node가 여러개 설치 된 경우 (nvm, brew등으로 인해) 어떤 노드를 쓰고 있는지 확인 하고 싶을때 `$ which node`

`bash_profile`

`bashrc`

- - - -
### Browser and Nodejs

Browser

* Build interactive apps for the web
* DOM
* Window
* Fragmentation - (browser handles version not you.)
* optional modules (es6)
* Async

Nodejs

* Build server side apps and scripts
* no GUI, no DOM (but can virtualize DOM)
* no window but dose have a global
* versioned, so no fragmentation.
* Required modules (commomjs +)
* Async
* No browser based APIs

- - - -

### Globals

* `process` - has information about the environment the program is running in
* `require` - function to find and use modules in current module
* `__dirname` - the current directory path
* `module` - information about current module, methods for making module consumable
* `global` - like window, its the 'global' object. Almost NEVER use this.

- - - -

### modules in Nodejs

* encapsulated code
* uses CommonJS for its module system
* ESM (ecmascript modules) **new standard**

#### Creating modules

* All your Nodejs code are already modules.
* just Export it. `$ module.exports = something`

Importing modules

```node
// lib.js
module.export = () => {
  console.log('hello i am library')
}
```

```node
// app.js
const someModule = require('./lib')
```

* 앱내에서 내가 작성한 코드를 불러올때는 항상 `.` 입력!
* lib.js에서 모듈은 이름없이 바로 export되었으므로 app.js에서 원하는 변수명으로 불러 올 수 있다.

- - - -

### Internal Modules

* `fs` - file system

```node
const fs = require('fs')
const file = fs.readFileSync('./lib.js', {encoding: 'utf-8'}).toString()

fs.writeFileSync('./lib.js', 'var me="me"')
```

* `path` - for manipulating path strings and handling differences across many OS’s
* `http` - love level-is module for creating network based program..
* `url`, `crypto`, etc

- - - -

### Async Code

* Node is single threaded and async like the browser
* unlike the browser, your node app will be shared by all clients


**Async patterns**
* callback pattern
call back takes error as first arg, and result as second
`doAsyncThing((error, result) => {})`


* promises
```
doAsyncThing()
	.then(result => {})
	.catch(error => {})
```

* async / await  !!
```js
const run = async () => {
	const results = await doAsyncThing()
	console.log('hello')
}
```



- - - -

### Error handling
* Any thrown or unhandled errors will cause the process to crash and exit


- - - -


### Debugging

1. `console.log`
2. use **node inspector** `node —inspect <file>`
go to `chrome://inspect`


- - - -

### Testing
* your code to be tested
* test suite  (test code)
* assertion library (Jest, etc ) - `expect(data.users).toHaveLength(1)`
* Mocks + Spies - third party 를 사용할때 유용 (stripe 결제 모듈을 사용할때 결제 테스팅한다던지..)


### Types of Test
* Unit Test - small pieces of code (individual units)
* Integration Test
* end-to-end : starting from client to back
* UI Test
* Snapshot Test - snapshot 을 비교
* Performance
* and many more!


