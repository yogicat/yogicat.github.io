---
layout: post
title: Python 자료구조
date: 2019-06-25 09:37 +0900
categories: blog
tags: algorithm
---

**Data Structures**

- Lists
- Tuples
- Dictionaries
- Sets

---

## Lists
                               
| Operation     | Example       | Complexity  | Notes                             |
|---------------|---------------|-------------|-----------------------------------|
| Index         | l[i]          | O(1)        |                                   |
| Store         | l[i] = 0      | O(1)        |                                   |
| Length        | len(l)        | O(1)        |                                   |
| Append        | l.append(5)   | O(1)        |                                   |
| Pop           | l.pop()       | O(1)        | same as l.pop(-1), popping at end |
| Clear         | l.clear()     | O(1)        | similar to l = []                 |
| Slice         | l[a:b]        | O(b-a)      | l[1:5]:O(l)/l[:]:O(len(l)-0)=O(N) |
| Extend        | l.extend(...) | O(len(...)) | depends only on len of extension  |
| Construction  | list(...)     | O(len(...)) | depends on length of ... iterable |
| check ==, !=  | l1 == l2      | O(N)        |                                   |
| Insert        | l[a:b] = ...  | O(N)        |                                   |
| Delete        | del l[i]      | O(N)        | depends on i; O(N) in worst case  |
| Containment   | x in/not in l | O(N)        | linearly searches list            |
| Copy          | l.copy()      | O(N)        | Same as l[:] which is O(N)        |
| Remove        | l.remove(...) | O(N)        |                                   |
| Pop           | l.pop(i)      | O(N)        | O(N-i): l.pop(0):O(N) (see above) |
| Extreme value | min(l)/max(l) | O(N)        | linearly searches list for value  |
| Reverse       | l.reverse()   | O(N)        |                                   |
| Iteration     | for v in l:   | O(N)        | Worst: no return/break in loop    |
| Sort          | l.sort()      | O(N Log N)  | key/reverse mostly doesn't change |
| Multiply      | k*l           | O(k N)      | 5*l is O(N): len(l)*l is O(N**2)  |

* Tuples support all operations that do not mutate the data structure (and they
have the same complexity classes).

---

## Sets
                               
| Operation      | Example       | Complexity       | Notes                                              |
|----------------|---------------|------------------|----------------------------------------------------|
| Length         | len(s)        | O(1)             |                                                    |
| Add            | s.add(5)      | O(1)             |                                                    |
| Containment    | x in/not in s | O(1)             | compare to list/tuple - O(N)                       |
| Remove         | s.remove(..)  | O(1)             | compare to list/tuple - O(N)                       |
| Discard        | s.discard(..) | O(1)             |                                                    |
| Pop            | s.pop()       | O(1)             | popped value "randomly" selected                   |
| Clear          | s.clear()     | O(1)             | similar to s = set()                               |
| Construction   | set(...)      | O(len(...))      | depends on length of ... iterable                  |
| check ==, !=   | s != t        | O(len(s))        | len(t); False in O(1) if the lengths are different |
| <=/<           | s <= t        | O(len(s))        | issubset                                           |
| >=/>           | s >= t        | O(len(t))        | issuperset s <= t == t >= s                        |
| Union          | s             | t                | O(len(s)+len(t))                                   |
| Intersection   | s & t         | O(len(s)+len(t)) |                                                    |
| Difference     | s - t         | O(len(s)+len(t)) |                                                    |
| Symmetric Diff | s ^ t         | O(len(s)+len(t)) |                                                    |
| Iteration      | for v in s:   | O(N)             | Worst: no return/break in loop                     |
| Copy           | s.copy()      | O(N)             |                                                    |

* Sets have many more operations that are O(1) compared with lists and tuples.
Not needing to keep values in a specific order in a set (while lists/tuples
require an order) allows for faster implementations of some set operations.

* Frozen sets support all operations that do not mutate the data structure (and
they have the same  complexity classes).

---


## Dictionaries

                               
| Operation      | Example     | Complexity  | Notes                                                         |
|----------------|-------------|-------------|---------------------------------------------------------------|
| Index          | d[k]        | O(1)        |                                                               |
| Store          | d[k] = v    | O(1)        |                                                               |
| Length         | len(d)      | O(1)        |                                                               |
| Delete         | del d[k]    | O(1)        |                                                               |
| get/setdefault | d.get(k)    | O(1)        |                                                               |
| Pop            | d.pop(k)    | O(1)        |                                                               |
| Pop item       | d.popitem() | O(1)        | popped item "randomly" selected                               |
| Clear          | d.clear()   | O(1)        | similar to s = {} or = dict()                                 |
| View           | d.keys()    | O(1)        | same for d.values()                                           |
| Construction   | dict(...)   | O(len(...)) | depends # (key,value) 2-tuples                                |
| Iteration      | for k in d: | O(N)        | all forms: keys, values, items. Worst: no return/break in loop |

* Most dict operations are O(1).
* defaultdicts support all operations that dicts support, with the same complexity (because it inherits all those operations); this assumes that
calling the constructor when a values isn't found in the defaultdict is O(1) - which is true for int(), list(), set(), ... (the things we commonly use)

* Note that `for i in range(...)` is `O(len(...))`; so `for i in range(1,10)` is `O(1)`.

If len(alist) is N, then `for i in range(len(alist)):` is O(N) because it loops N times. 
Of course even `for i in range (len(alist)//2):` is `O(N)` because it loops N/2 times, and dropping the constant 1/2 makes it `O(N)`: the work doubles when the list length doubles. By this reasoning, `for i in range (len(alist)//1000000):` is `O(N)` because it loops N/1000000 times, and dropping the constant 1000000 makes it `O(N)`: the work doubles when the list length doubles.
Remember, we are interested in what happens as N -> Infinity.

Finally, when comparing two lists for equality, the complexity class above shows as `O(N)`, but in reality we would need to multiply this complexity class by `O==(...)` where `O==(...)` is the complexity class for checking whether two values in the list are `==`. If they are ints, `O==(...)` would be `O(1)`; if they are strings, `O==(...)` in the worst case it would be `O(len(string))`. 
This issue applies any time an `==` check is done. 
We mostly will assume `==` checking on values in lists is `O(1)`: e.g., checking ints and small/fixed-length strings.

---

## Lists

- Mutable and ordered. 
- Relatively efficient memory usage.
- Disadvantages: Searching is O(n).


#### Creating List

```python
mylist = [ ]
mylist = [1,2,3]
mylist = ['a', 'b', 'c', [1,2,3] ] # 4 elements
```

#### Retrieving one element, given an index

```python
x = mylist[3]
```

#### Checking membership

```python
3 in mylist # True or False
```

#### “list” function returns a list:

**lust**함수를 사용해 다른 타입으로부터 리스트 타입 반환

```python
list('abc') # ['a', 'b', 'c']
list((1,2,3)) # [1,2,3]
list({1,2,3}) # [1,2,3]
```

#### Replacing an existing element

```python
mylist = ['a', 'b', 'c']
mylist[1] = 'z'
mylist # ['a', 'z', 'c']
```


#### Replacing multiple existing elements

```python
mylist = ['a', 'b', 'c', 'd', 'e', 'f']
mylist[1:3] = 'xyz' # replace indexes 1 and 2 with x, y, z
mylist # ['a', 'x', 'y', 'z', 'd', 'e', 'f']
```

#### Adding an element to the end

```python
mylist = ['a', 'b', 'c']
mylist.append('d')
mylist # ['a', 'b', 'c', 'd']
mylist.append([1,2,3])
mylist # ['a', 'b', 'c', 'd', [1,2,3]]
```


#### Adding multiple elements to the end

```python
mylist = ['a', 'b', 'c']
mylist.extend([1,2,3])
mylist # ['a', 'b', 'c', 'd', 1, 2, 3]
```

#### Removing an element from the end

```python
mylist = ['a', 'b', 'c']
mylist.pop() # returns 'c'
mylist # ['a', 'b']
```


#### Removing an element from any index

```python
mylist = ['a', 'b', 'c']
mylist.pop(0) # returns 'a'
mylist # ['b', 'c']
```

#### Removing an element based on its value (rather than its position)

```python
mylist = ['a', 'b', 'c', 'a', 'a', 'b']
mylist.remove('a') # 첫 'a'를 제거
mylist # ['b', 'c', 'a', 'a', 'b']
```

#### Sorting

```python
mylist = ['d', 'a', 'c', 'b']
mylist.sort() # None을 리턴
mylist # ['a', 'b', 'c', 'd']
```

#### Reversing
```python
mylist = ['a', 'b', 'c']
mylist.reverse() # None을 리턴
mylist # ['c', 'b', 'a']
```

#### Joining
```python
mylist = ['a', 'b', 'c']
'*'.join(mylist) # 'a*b*c'
'...'.join(mylist) # 'a...b...c'
```

#### Iterating over the elements

```python
mylist = ['a', 'b', 'c']
for item in mylist:
    print(item)
```

#### Iterating over the sorted elements

```python
mylist = ['d', 'a', 'c', 'b']
for item in sorted(mylist):
    print(item)
```
---

## Tuples

- Immutable and ordered. 
- Relatively efficient memory usage (more than lists).
- Searching is O(n)


#### Creating

```python
t = ('a', 1, [1,2,3]) # ()와 콤마는 tuple을 의미
t = ('a',) # 한개의 요소가 있는 tuple은 콤마 필수
```

#### From another type

```python
tuple([1,2,3]) # (1,2,3)
```

#### Iterating over the elements

```python
t = ('a', 'b', 'c')
for item in t:
    print(item)
```

#### Iterating over the sorted elements

```python
t = ('d', 'a', 'c', 'b')
for item in sorted(t):
    print(item)
```

---


## Dictionaries

- Mutable, unordered pairs (keys and values) of objects. 
- Keys must be hashable.
- O(1) searching for keys. 
- Makes it easy to create trees and other hierarchical data structures. 
- Can be used to create self-documenting code.
- Many problems can be described in terms of key-value pairs.
- Only lookup by key. 
- Uses more memory than lists and tuples. 


#### Creating

```python
{'a':1, 'b':2, 'c':3} # {'a': 1, 'b': 2, 'c': 3}
```

#### Creating from other data

```python
dict(['a',1], ['b',2], ['c',3]) # {'a': 1, 'b': 2, 'c': 3}
dict(('a',1), ('b',2), ('c',3)) # {'a': 1, 'b': 2, 'c': 3}
```


#### Retrieving from a key

```python
d = {'a':1, 'b':2, 'c':3}
d['a'] # 1
d['z'] # raises KeyError
```

#### Add a key-value pair

```python
d = {'a':1, 'b':2, 'c':3}
d['d'] = 100
d # {'a': 100, 'b': 2, 'c': 3, 'd': 100}
```

#### Replacing an existing value

```python
d = {'a':1, 'b':2, 'c':3}
d['a'] = 100
d # {'a': 100, 'b': 2, 'c': 3}
```

#### Replacing multiple existing values

```python
d = {'a':1, 'b':2 }
x = {'a':555, 'z':987}
d.update(x, y=10) # Returns None
d # {'a': 555, 'b': 2, 'y': 10, 'z': 987}
```

#### Removing an element

```python
d = {'a':1, 'b':2, 'c':3}
del(d['a'])
d # {'c': 3, 'b': 2}
```

#### Getting the keys

```python
d = {'a':1, 'b':2, 'c':3}
d.keys() # dict_keys(['a', 'b', 'c']) (Python 3)
```

#### Getting the values

```python
d = {'a':1, 'b':2, 'c':3}
d.values() # dict_values([1, 2, 3])
```

#### Iterating over the keys

```python
d = {'a':1, 'b':2, 'c':3}
for k in d:
    print("{0}: {1}".format(k, d[k]))
```


#### Iterating over the pairs

```python
d = {'a':1, 'b':2, 'c':3}
for k, v in d.items()
    print("{0}: {1}".format(k, v)
```

#### Iterating over the sorted keys

```python
d = {'a':1, 'b':2, 'c':3}
for k in sorted(d):
    print("{0}: {1}".format(k, d[k]))
```

---

## Sets

- Mutable, unordered, unique objects. 
- Elements must be hashable.
- Searching is O(1)
- Lots of useful methods.


#### Creating

```python
s = {1,2,3} # Python 2.7, 3.x
```

#### Creating from another type

```python
s = set([1,2,3]) # From list
s = set((1,2,3)) # From tuple
s = set('abc') # From string
```

#### Adding a value

```python
s = {1,2,3}
s.add(4)
s # {1,2,3,4}
s.add(4)
s # {1,2,3,4} — 중복 값은 무시
```

#### Adding multiple values

```python
s = {1,2,3}
s.update([3,4,5]) # Any iterable will do
s # {1,2,3,4,5} — 중복 값은 무시
```
#### Removing an element

```python
s = {1,2,3}
s.remove(1)
s # {2,3}
```
