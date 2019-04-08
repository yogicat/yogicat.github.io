---
title: "네트워킹에 대해 노트정리"
layout: post
date: 2018-10-22
categories: blog
tag: programming
---



**The Internet and IP**

## Network Applications
* Read and write data over network
* Dominant model: **bidirectional, reliable byte stream** connection
	* one side reads what the other writes
	* operates in other directions
	* reliable

---

### Byte Stream Model
* either sides can close the connection

---


### WorldWideWeb (HTTP)
* http: -> means using http
* most common request from client to server is `GET`

* request: “GET / HTTP/1.1”
* response: “HTTP/1.1 200 OK”

---

### BitTorrent
* breaks files into “pieces”
* clients join and leave “swarms”
* tracker - keeps track on what clients are members of the swarms.

### Skype
* NAT - network address translator
* Rendezvous server
* personal computers are often behind NAT for security reasons
	* you can’t connect to the other pc because of NAT
	* servers don’t  go through NAT
* Relay server
	* clients both behind NAT

---

## Application Communication
* Bidirectional, reliable byte stream
	* Building lock of most applications today
	* Other models exist and are used
* Abstracts away entire network - pipe between two programs
* Application level controls communication pattern and payloads
	* World Wide Web (HTTP) : client & server model
	* Skype : mixed of www & BitTorrent
	* BitTorrent : peer - to - peer model

---

## 4 layer Internet Model
* Application
* Transport
* Network
* Link

---

### Link layer

* carry a data over one link at a time
* ethernet & wifi are two different link layers
* delivers data over a single link between an end host and router, or between routers
---

### Network Layer

* deliver packets **end-to-end** across the Internet from the source to the destination
* network layer has a common way to talk to many different link layers by simply handling them datagrams to send
* separation of concerns is made possible by the modularity of each layer and a common well-defined API to the layer below.

### The network layer is **special**
* We must use the **Internet Protocol(IP)**
  * IP makes a best-effort attempt to deliver our datagrams to the other end.
  * IP datagrams can get lost, can be delivered out of order, and can be corrupted. **There are no guarantees or promises.**
* How can the Internet work at all when the packets are not guaranteed to be delivered?
* if an application wants a guarantee that its data will be retransmitted when necessary and will be delivered to the application in order and without corruption then it needs another protocol running on top of IP -> Transport Layer

---

### Transport Layer
* Typically Guarantees correct, in-order delivery of data end-to-end
* Controls congestion
* TCP (TCP/IP) - Transmission Control Protocol
	* TCP makes sure that data sent by an application at one end of the Internet is correctly delivered in the right order to the other end of the Internet.
* UDP - User Datagram Protocol
	* no guarantee.

---

### Application Layer
* Bi-directional reliable byte stream between two applications, using application-specific semantics(e.g. http, bit-torrent)
