---
title: "DOM조작 101"
layout: post
date: 2018-10-20
categories: blog
tags: programming
---


### Basics

All items in the Dom are defined as nodes
- HTMLCollection : live collection
- NodeList : non-live


### Node object types

- DOCUMENT_NODE : window.document
- ELEMENT_NODE : `<body>`, `<p>`, `<a>`, `<h1>`, …
- ATTRIBUTE_NODE : class = "list-group"
- TEXT_NODE : text in an html document


---

### Accessing Dom Elements

```js
// Returns a reference to the element by its ID.
document.getElementById('someid');

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName('someclass');

// Returns an HTMLCollection of elements with the given tag name.
document.getElementsByTagName('LI');
document.getElementsByTagName('article');

// Returns the first element within the document that matches the specified group of selectors.
document.querySelector('.someclass');
document.querySelector('#demo-query');

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.
document.querySelectorAll('div.note, div.alert');
```

---

### Get Parent

```js
// Get parent node
children.parentNode;
children.parentElementNode;
```

### Get Child/Children

```js
// Get child nodes
parent.childNodes;
parent.firstChild;
parent.lastChild;

// get child element nodes
parent.children;
parent.firstElementChild;
parent.lastElementChild;
```

---

### Get Sibling Nodes

```js
// get sibling node
child.previousSibling;
child.nextSibling;

// get sibling element node
child.previousElementSibling;
child.nextElementSibling;
```

---

### Get the tag name of an element

```js
// logs A in UPPERCASE
document.querySelector('a').tagName;
document.querySelector('a').nodeName;
```


### Get the Class

```js
// whole class 'glyphicon remove-circle something ...'
document.querySelector('div').className;

// class list {0:"glyphicon", 1:"remove-circle", ...}
document.querySelector('div').classList;
```

---

### Create New Nodes

```js
// create a new element node
document.createElement('p');
document.createElement('h1');

// create a new text node
// 생성자체로는 브라우저에는 보이지 않음 - insert해줘야 볼 수 있음
document.createTextNode('This is a nice header text!');


// get,set text content of an element node
node.textContent;
node.textContent = "I'm a paragraph";
// example
const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';


// get,set html content of an element
// XSS(cross-site scripting)위험이 있음
node.innerHTML;
node.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";
```

### Insert Nodes into the DOM

```js
// add a node as the last child of a parent element
parent.appendChild(newChild);

const todoList = document.querySelector('ul');
const newTodo = document.createElement('li');
todoList.appendChild(newTodo);

// insert a node into the parent element before sibling
parent.insertBefore(newNode, nextSibling);

// replace an existing node with a new node
parent.replaceChild(newNode, oldNode);

//
element.insertAdjacentHTML('beforebegin', '<div>this gets inserted.</div>');
```

- beforebegin : `element`바로 앞에 형제요소로 넣는다
- afterbegin : `element` 안에 첫째자식 앞으로 넣는다
- beforeend : `element` 안에 마지막 자식요소 다음으로 넣는다
- afterend : `element`바로 뒤에 형제요소로 넣는다

---

### Remove Nodes

```js
parent.removeChild(childNode);
childNode.remove();
```

### Class List

```js
// grab element on page you want to use
var firstHeading = document.getElementById('firstHeading');

// will remove foo if it is a class of firstHeading
firstHeading.classList.remove('foo');

// will add the class 'anotherClass' if one does not already exist
firstHeading.classList.add('anotherclass');

// add or remove multiple classes
firstHeading.classList.add('foo', 'bar');
firstHeading.classList.remove('foo', 'bar');

// if visible class is set remove it, otherwise add it
firstHeading.classList.toggle('visible');

// will return true if it has class of 'foo' or false if it does not
firstHeading.classList.contains('foo');
```

---

### Get, Set, Remove, Attribute Value

```js
var atts = document.querySelector('a');
atts.removeAttribute('title')';
atts.removeAttribute('class')';

atts.setAttribute('href', '#');
atts.setAttribute('title', 'yes');
atts.setAttribute('data-foo', 'name');
atts.setAttribute('style', 'margin:0;');


atts.getAttribute('href');
atts.getAttribute('title');
atts.getAttribute('data-foo');


// verifying attribute - boolean (value없어도 true)
atts.hasAttribute('href');
atts.hasAttribute('title');
```


### Check the nodes

```html
<html>
<input type="text">
<input type="text">

<textarea>foo</textarea>
<textarea>bar</textarea>
</html>
```

```js
// if the two nodes are the same type
var input = document.querySelectorAll('input');
input[0].isEqualNode(input[1]);
// returns true;

var textarea = document.querySelectorAll('textarea');
textarea[0].isEqualNode(textarea[1]);
// returns false;
```

### Get, Set Data-* attributes

dataset contains camel case versions of data attributes. data-foo-foo will be listed as fooFoo

`<div data-foo-foo="foo" data-bar-bar="bar"></div>​`

```js
var elm = document.querySelector('div');

//get
console.log(elm.dataset.fooFoo); //logs 'foo'
console.log(elm.dataset.barBar); //logs 'bar'

//set
elm.dataset.gooGoo = 'goo';
```

---

*Resources*

- [DOM Enlightenment](http://domenlightenment.com/)
- [Understanding the DOM](https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom)
