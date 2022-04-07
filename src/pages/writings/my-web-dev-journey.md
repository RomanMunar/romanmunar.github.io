---
title: "CSS Animations. Everything you need to know"
publishedAt: "2022-01-01"
description: "Code along as I discuss how to animate elements using css with live examples"
image: /images/dist/banner-blog.webp
tags:
  - "CSS"
  - "Dev"

layout: "../../components/Pages/WritingsPage/WritingContentLayout.astro"
---

We will be tackling different ways to animate an element using css, as well as the different properties that we can use, and properties we should avoid using for performance reasons.

### Common mispractice on animations in css

What I've seen in a lot of youtube css tutorials, is that they are animating height,width, margin, padding, etc. All of these properties triggers a repaint and layout rendering of the entire DOM, these will cause lags that will be prominent as your web site add more components, and will result to a bad users experience, especially if they're on a mobile device. you may see whether a transition property triggers a repaint here, [https://csstriggers.com](https://csstriggers.com).

| Repaint causing properties | Instead Use                 |
| -------------------------- | --------------------------- |
| height                     | `transform: scaleY()`       |
| width                      | `transform: scaleX()`       |
| margin                     | `transform: translate(X,Y)` |
| padding                    | `transform: scale(X,Y)`     |
| top/bottom \| left/right   | `transform: translate(X,Y)` |

### Let's start

First off, our goal here is to create a minimum working example, that you can extend for your use-case.

We will be animating our elements on hover, It will emphasize our animation properties that we'll be using.

I've seperated transform properties from the commonly used ones like colors, shadows, and opacity

### Transition

the `transition` property is all you'll need for animating elements, this takes in 4 parameters, `t-property t-duration t-timing-function t-delay`, but only `t-property` and `t-duration` is required, other params have a default value ease-in for `t-timing-function` and 0 for `t-delay`.

- [Transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)

There a lot of transition properties that you may animate, but beware as most of them triggers a DOM repaint and layout rendering, as discussed [above](#common-mispractice-on-animations-in-css).

To name a few good ones, this will commonly be, transform, color and shadow.
All of which has value may it be degrees, (px/rem)s, hexcode, etc.

- [Transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)

Transitions uses time to calculate the start and end values of the animation property you're animating, this takes in a number in seconds(s) and milliseconds(ms).

- [Transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

Remember that transitions determine the start and end values using time, transition-timing-function are curves that are used determine to how fast/slow those values would be in a set amount of time.

This defaults to ease-in, so we'll take it as an example, The values start out slow, and ramps up as time increases.

- [Transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay).

This is very rarely used but, this is useful when you have a staggering animation which _relies on other elements before it animates_.

We'll begin with our starting code here, We'll be animating our elements on hover.

Create an `index.html` file and paste the starting code below,

```html:index.html
<style>
  .color:hover {
    color: #50c717;
  }
  .color {
    background: #3a8cb8;
    color: #fff;
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .shadow:hover {
    box-shadow: 0px 2px 5px #000;
  }
  .shadow {
    background: #ec3d08;
    transition: box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .opacity:hover {
    opacity: 0.5;
  }
  .opacity {
    background: #1d1c2f;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  div {
    width: 100px;
    height: 100px;
    padding: 10px;
  }
  body {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
</style>
<body>
  <div class="color">Color Animation</div>
  <div class="shadow"></div>
  <div class="opacity"></div>
</body>
```

If applied, you'll see a similar animation like the one below,

See a recurring pattern here? `transition: property duration curve`
If I want to animate the background color, It would look like `transition: background-color 500ms ease-in` and say we want to animate our background from white and to black on hover, It would look like

```html:index.html
.whiteToBlack:hover {
	background-color: #000;
}
.whiteToBlack {
	background-color: #fff;
	transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
<div class="whiteToBlack"></div>
```

### Transform

Transform will make up around 70% of your animations. Which is why I think it deserves its own section. `transform` should be your go-to when thinking about moving animations, as it will cover most of the animations you'll need.

We'll have a similar structure to the one above.

Create another `index.html` file and paste the starting code below,

```html:index.html
<style>
  .rotate:hover {
  }
  .rotate {
    background: #3a8cb8;
  }

  .translate:hover {
  }
  .translate {
    background: #ec3d08;
  }

  .scale:hover {
  }
  .scale {
    background: #1d1c2f;
  }

  div {
    width: 100px;
    height: 100px;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  body {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
</style>
<body>
  <div class="rotate"></div>
  <div class="translate"></div>
  <div class="scale"></div>
</body>

```

- #### Rotate

```css
.rotate:hover {
  transform: rotate(12deg);
}
```

By adding the rotate(12deg) value to the transform property, you should have similar animation as the first square below.

the `transform: rotate([angle](deg | turn | rad))` will rotate the element by the
angle passed. Options passed in can be deg for degrees ranging from 0 - 360, turn
for a revolution ranging from 0 to 1, and a 6.28 rad equates to 360 deg.

- #### Translate

```css
.translate:hover {
  transform: translate(1.25rem, 1.25rem);
}
```

the translate property can take two parametes, which are the x and y axis, the example below took 1.25rem on x-axis and also 1.25rem on y-axis.

- #### Scale

```css
.translate:hover {
  transform: translate(1.25rem, 1.25rem);
}
```

- #### Skew

```css
.skew:hover {
  transform: skew(1.25rem, 1.25rem);
}
```

I won't be covering the skew property as it's being very rarely used.
But it basically change the elements' perspective and similar to translate, it takes in two arguments, for x and y axis, but each takes an angle degree value.

If applied using example above, you'll see similar like the one below

### A Sample Modal, combining it all.

```html:index.html
<style>
  .overlay {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: background-color 0.5s ease-in-out;
    visibility: hidden;
  }
  .overlay.open {
    background-color: rgba(0, 0, 0, 0.5);
    visibility: visible;
  }
  .modal.open {
    transform: translateY(200px);
    visibility: visible;
  }
  .modal {
    background: #fff;
    text-align: center;
    transition: transform 0.5s ease-out;
    visibility: hidden;
  }
</style>
<body>
  <button
    onClick="(()=>{
      document.getElementsByClassName('overlay')[0].classList.add('open')
      document.getElementsByClassName('modal')[0].classList.add('open')
    })();"
  >
    Toggle Modal
  </button>
  <div
    class="overlay"
    onClick="((e)=>{
      document.getElementsByClassName('overlay')[0].classList.remove('open')
      document.getElementsByClassName('modal')[0].classList.remove('open')
    })();"
  ></div>
  <div class="modal">I'm a modal</div>
</body>
```
