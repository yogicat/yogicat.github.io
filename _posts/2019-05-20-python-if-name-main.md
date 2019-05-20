---
layout: post
title: 파이썬 if __name__ == '__main__'
categories: blog
tags: programming
date: 2019-05-20 11:47 +0900
---
- 다른 언어와 달리 파이썬은 자동으로 실행되는 메인함수가 없다.
- 작성한 프로그램의 엔트리 포인트 모듈의  `__name__`은 `"__main__"`이고 그외의 경우에는 파일명이 `__name__`이 된다.


```py
if __name__ == '__main__':
  # do something
```

`__name__`은 현재 모듈의 이름을 나타낸다. `python foo.py`로  `foo.py`를 실행하면 이때 `"__name__" == "__main__"`이 된다.(foo.py모듈은 직접 메인으로 실행되었다..라고 이해할 수 있다.) 하지만 다른 파일 `bar.py`에서 `foo.py`를 임포트해서 사용할 경우에는 `"__name__" == "__main__"`이 아니므로 해당 if구문은 실행되지 않는다. 다른파일을 통해 임포트 된 경우에는 `__name__`에는 파일이름인 `"foo"` 가 할당된다.


---

[https://docs.python.org/3.7/library/__main__.html](https://docs.python.org/3.7/library/__main__.html)

`__main__` — Top-level script environment
`'__main__'` is the name of the scope in which top-level code executes. A module’s `__name__` is set equal to `'__main__'` when read from standard input, a script, or from an interactive prompt.

A module can discover whether or not it is running in the main scope by checking its own `__name__`, which allows a common idiom for conditionally executing code in a module when it is run as a script or with python -m but not when it is imported:

```py
if __name__ == "__main__":
    # execute only if run as a script
    main()
```

For a package, the same effect can be achieved by including a `__main__.py` module, the contents of which will be executed when the module is run with -m.
