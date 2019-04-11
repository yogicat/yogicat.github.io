---
layout: post
title: Jekyll Compose로 포스팅생성하기
categories: blog
tag: programming
date: 2019-04-11 12:02 +0900
---


[jekyll-compose](https://github.com/jekyll/jekyll-compose) 플러그인을 사용하면 커맨드로 블로그 post와 draft를 생성할 수 있다.
_config.yml에 통해 미리 frontmatter값을 지정할 수 있다.


**frontmatter 설정하기**

```ruby
jekyll_compose:
  draft_default_front_matter:
    description:
    image:
    category:
    tags:
  post_default_front_matter:
    description:
    image:
    category:
    tags:
    published: false
    sitemap: false
```


**post / draft 생성하기**

`$ bundle exec jekyll post "draft name"`
`$ bundle exec jekyll draft "draft name"`


**특정 draft를 publish하기**

`$ bundle exec jekyll publish "_drafts/draft-name.md"`


그외에도 원하는 날짜로 publish하거나 unpublish도 할 수 있다.



