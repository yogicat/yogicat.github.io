---
layout: post
title: 장고 postgreSQL 설정하기
date: 2019-05-03 12:14 +0900
categories: blog
tags: programming
---

PostgreSQL은 object-relational database management system으로, 오픈소스 데이터베이스 시스템이다.

**맥 OS 에서 postgreSQL 유용한 툴들**

- [Postgres.app](https://postgresapp.com/) - db 연결을 빠르고 쉽게 해준다.
- [pgAdmin - PostgreSQL Tools](https://www.pgadmin.org/) -  연결된 db의 정보를 gui로 볼 수 있다.

다운받아 설치한 뒤 켜기만 하면 된다. GUI를 이용하거나 터미널을 이용해 데이터베이스와 유저를 생성할 수 있다.

---

### 데이터베이스 생성하기
postgres.app과 pgAdmin을 통해서 간편하게 생성할 수 있다.
우선 터미널에서  `psql`명령어 입력해 postgres 콘솔을 실행한다.

**유저 생성하기**

`# CREATE USER yogicat;`

**비밀번호와 함께 생성하기**

`# CREATE USER yogicat WITH PASSWORD 'password;`

**데이터베이스 생성하기**

`# CREATE DATABASE toyproject OWNER yogicat;`

**유저 권한 설정하기**

`GRANT ALL PRIVILEGES ON DATABASE toyproject to yogicat;`

  - `ALL`을 통해  `toyproject`  데이터 베이스에 대한 모든 권한을 `yogicat`에게 부여한다. 권한의 종류에는  SELECT, INSERT, UPDATE, DELETE, RULE, REFERENCES, TRIGGER, CREATE, TEMPORARY, EXECUTE, USAGE 가 있다.

### 장고에 PostgreSQL 설정하기

**필요한 패키지 설치하기**
- psycopg2

**settings.py에 db정보 입력하기**
```py
...
DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'toyproject',
        'USER': 'yogicat',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
	}
}
```

이제 기존의 방법대로 `makemigrations`와 `migrate`를 통해 postgreSQL 로컬 데이터베이스와 연결할 수 있다. 작업전에 로컬 서버를 켜두는 것 잊지말기.
