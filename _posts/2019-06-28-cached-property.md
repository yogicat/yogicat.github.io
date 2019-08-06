---
layout: post
title: 장고, cached_property
date: 2019-06-28 09:26 +0900
categories: blog
tags: programming
---

# property / cached_property

**@cached_property** decorator caches the result of a method with a single self argument as a property. The cached result will persist as long as the instance does, so if the instance is passed around and the function subsequently invoked, the cached result will be returned.


```django
from django.utils.functional import cached_property

class Person(models.Model):
	...
	@cached_property
	def friends(self):
		...
```


@cached_property can ensure that an attribute’s value does not change unexpectedly over the life of an instance. This could occur with a method whose computation is based on datetime.now(), or simply if a change were saved to the database by some other process in the brief interval between subsequent invocations of a method on the same instance.

You can make cached properties of methods. For example, if you had an expensive get_friends() method and wanted to allow calling it without retrieving the cached value, you could write:

```django
friends = cached_property(get_friends, name='friends')
```