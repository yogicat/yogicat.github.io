---
layout: post
title: 데이터베이스 인트로 📝
date: 2019-04-29 22:34 +0900
categories: blog
tags: programming
---



### What is Database?
- **Any** collection of related information
- Databases can be stored in different ways

### What is DBMS?
- Database Management Systems
- 사용자가 데이터베이스를 생성하고 관리할 수 있게 도와주는 특별한 소프트웨어 프로그램

### CRUD
- Create, Read, Update, Delete

---

### Two Types of DB

**Relational Databases (SQL)**
- 하나 혹은 그 이상의 테이블로 이루어짐
- columns and rows (엑셀시트 처럼)
- row 마다 유니크 키가 있음

**Non-Relational (noSQL / not just SQL)**
- 테이블이 아닌 형태로 데이터 관리.
- Key-value stores
- Documents
- Graphs

### Relational Databases (SQL)
- RDBMS - Relational Database Management Systems
	- 사용자가 RDB를 사용할 수 있게 도와주는 프로그램
	- mySQL, Oracle, postgreSQL, mariaDB, …
- Structured Query Language (SQL)
	- RDBMS과 커뮤니케이션 하기 위한 standard language
	- CRUD 작업을 실행하는데 쓰임.
	- 테이블과 구조를 정의


### Non-Relational Databases (noSQL / not just SQL)
- Document의 형태 (JSON, XML, …)
- Graph (Relational nodes)
- Key-Value Hash (strings, json, blob, ..)
- NRDBMS
	- mongoDB, dynamoDB, firebase, etc
- standard language가 없음

---

### Database Queries
- Requests made to the database management system for specific information
- A google search is a *query*

- - - -
### Tables and Keys

![](/uploads/Screen&#32;Shot&#32;2019-04-29&#32;at&#32;10.18.53&#32;PM.png)
(Red - Primary Key, Green - Foreign Key)

**Primary Key : unique key**
- Natural Key - has mapping to the real world
- Surrogate Key - has no mapping to the real world
- Foreign Key - stores primary key of a row in another table (link to another table, relationship between two tables)
- Composite Key - two attributes together makes up a primary key of table

---

### SQL
- Structured Query Language
- Create, retrieve, update & delete data
- Create & manage databases
- Design & create database tables
- Perform administration tasks (security, user management, import/export, ..)

- Hybrid language (4 types of languages in one)
	- Data Query Language
	- Data Definition Language
	- Data Control Language
	- Data Manipulation Language

---

### Queries
- A set of instructions given to the RDBMS  what information you want it to retrieve for you.
- Goal is to only get the data you need

```
example
SELECT employee.name, employee.age
FROM employee
WHERE employee.salary > 3000
```

- - - -

### 자료
- [SQL - Full course for beginners - YouTube](https://youtu.be/HXV3zeQKqGY)
