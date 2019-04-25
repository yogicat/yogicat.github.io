---
title: "자주쓰는 GIT 명령어 🚩"
layout: post
date: 2018-10-11
categories: blog
tags: programming
---


### git은 무엇인가

- 리눅스를 만든 Lunus Torvalds에 의해 만들어졌다.
- 버전컨트롤 시스템으로 SHA-1 hash를 사용한다. (자료의 무결성을 보호)

---

### git cheatsheet

* `git config --list` - 깃 설정을 볼 수 있다.
* `git config --global user.name "Dahye Oh"` - 전역으로 유저 이름을 설정
* `git config --global user.email` - 이메일 설정
* `git help <verb: config, commit, ...>` - 해당 명령어의 매뉴얼 볼 수 있다.
* `git diff <filename>` - Check the differences between the working directory and the staging area
* `git diff branch-1 branch-2` - Check the differences between branches.
* `git log` - view commits
* `git show HEAD` - 가장 최신 커밋을 볼 수 있다.
* `git commit --amend` - 	Amend the last commit
* `git checkout HEAD <filename>` - 가장 최신 버전으로 복구
* `git checkout -- <file>` - to discard changes in working directory)
* `git checkout -f`	Force checkout, discarding changes (dangerous)
* `git reset HEAD <filename>` - unstage file from the staging ares, 언스테이징.
* `git reset <commit_SH>` - 커밋 해쉬 앞7자리를 입력해 그 커밋으로 맞춘다.(이후 커밋은 없어진다)
* `git branch <branchname>` - create branch
* `git branch` - list branches
* `git push -u origin <branch:master, feature,…>` - 리모트 브랜치로 올린다 (-u를 함으로써 나중에 연결된 상태를 기억하고 git push / git pull 만으로도 그 브랜치와 연결된다)
* `git merge <branchname>` - branch를 현재 브랜치로 머지.
* `git branch —merged` - merge된 브랜치를 나타냄
* `git branch -d <branch name>` - 해당 브랜치 로컬에서 삭제
* `git branch -D`	- Delete branch (even if unmerged) (dangerous)
* `git push origin --delete <branch name>` - 해당 브랜치를 리모트에서 삭제
* `git branch -a` - 전체 로컬, 리모트 브랜치 보기
* `git push <remote> :<branch>` - 리모트 브랜치 삭제
* `git rebase <branch>` - moving or combining a sequence of commits to a new base commit.
* `git pull --rebase origin master` - origin/master를 당겨오면서 현재 변경사항을 그 위로 올린다. (아래 그림 참고)

---

## git rebase

![](/uploads/git-rebase.svg)

rebase는 브랜치의 변경사항을 최신 HEAD위에 올려다 놓는다.
