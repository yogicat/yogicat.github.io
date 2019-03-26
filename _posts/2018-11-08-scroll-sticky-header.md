---
title: "TIL, how to make header sticky on scroll"
layout: post
date: 2018-11-08
categories: Blog
---

I was trying to get the header-GNB to hava a different style and be sticky when user had scrolled the content.


- detect scroll event with  `window.addEventListened('scoll', handleScroll())`
- calculate scroll height with `window.scrollY`
- use `componentDidMount` and `componentWillUnmount` life cycle hooks for event handling
- add sticky class when scrolled!


It was really easy to implement and gave great user experience too. You can do more with playing around differend styling and stuff.

It not only works for sticky header but also works great for show or hide items on certain position.

You can apply styles directly inside the component or simply add classes with different styles.


---


```js
class Header extends Component {
    state = { isScrolled: false };

    handleScroll = () => {
       const { isScrolled } = this.state

       window.scrollY > this.prev ?
       !isScrolled && this.setState({ isScrolled: true })
       :
       isScrolled && this.setState({ isScrolled: false });

       this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.handleScroll);
    }

    render(){
        const classSticky = this.state.isScrolled ? 'sticky' : '';
        return <Header className={`Header ${classSticky}`}>....</Header>;
    }
}
```

```css
Header {
  ...styling

  &.sticky {
    position: sticky;
    top: 0;
    ...other stuff
  }
}
```


