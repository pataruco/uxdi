class: frontpage
<a href="/">back to home</a>

<div>
  <h2>User Experience Immersive </h2>
  <hr/>
  <h1>Intro to code</h1>
</div>

---

class: fullscreen, bg-black

## HTML & CSS & bit of JavaScript

---

# Goal

By the end of this workshop, our goal is to build a simple **responsive** web page 🚀.

---

# Tell the difference...

Please, tell us the difference between:

## Internet vs Web

---

# Tell the difference...

Please, tell us the difference between:

## Frontend vs Backend

---

# Frontend vs. Backend

The development process can be broken into two areas:

.row[
.column[

### Front-End

- How things look to the user
- Involves: images, content, structure
- HTML, CSS, and JavaScript
  ]

.column[

### Back-End

- How things work
- Involves: “business logic” and “data”
- Ruby, PHP, C++, Java, etc.]
  ]

---

# Tell the difference...

Please, tell us the difference between:

## Website vs Webpage vs Web server

---

# The 3 Layers of the Web

.row[
.column[.image-third[![](https://mdn.mozillademos.org/files/13502/cake.png)]]
.column[

- **HTML** is the markup language that we use to structure and give meaning to our web content.
- **CSS** is a language of style rules that we use to apply styling to our HTML content.
- **JavaScript** is a scripting language that enables you to manipulate dynamically content and style.
  ]
  ]

---

# How the Web works?

<div class="row">
  <div>
    <picture>
      <img
        src="https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png"
        alt="Request and response cycle"
      />
    </picture>
  </div>
  <div>
    <ol>
      <li>Browser send a HTTP request to the server</li>
      <li>
        Requests for dynamic resources are forwarded to server-side code
        (application)
      </li>
      <li>
        Application interprets the request, reads required information from the
        database
      </li>
      <li>Combines the retrieved data with HTML templates</li>
      <li>Sends back a response containing the generated HTML</li>
      <li>Browser read response and re render</li>
      <li>Browser request static assets</li>
    </ol>
  </div>
</div>

---

class: bg-teal, fullscreen

# Tools We'll be using

---

# Text editor

.row[

.column[
For this workshop, we’ll be **[Visual Studio Code](https://code.visualstudio.com/Download)**

- It’s free
- Provides syntax highlighting, code hinting, auto completion, and a lot of great features geared towards writing code
- Word, Pages, and any WYSIWYG editor is NOT suitable for code!

]
.column[
.image-half[![](https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg)]
]
]

???

- How many of you haven’t already installed Visual Studio Code?
- This looks like notepad when you open it, but it gives us powerful tools as developers
- Cover difference between WYSIWYG tools and Visual Studio Code

---

# Browser

.row[
.column[
.image-half[![](https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg)]
]
.column[

- We recommend using **[Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/)**.
- It’s free
- It provides many developer-friendly tools!
  ]
  ]

---

## Getting Started

- Type this URL into your browser:

# .center[[http://bit.ly/GAIntroToCode](http://bit.ly/GAIntroToCode)]

- Extract the folder that downloads:
- On a **Mac**: double click on the zip file and it will extract
- On **Windows**: open the zip folder and hit `Extract all` in the menu bar
- Open **Visual Studio Code**
- Drag the entire folder you unzipped onto the **Visual Studio Code**

---

class: fullscreen, bg-burgundy

# HTML

## Hypertext Markup Language

---

# HTML

**HTML** _(Hypertext Markup Language)_ is not a programming language; it is a markup language used to tell your browser how to structure the web pages you visit.

---

# A Typical HTML Tag

`My cat is very grumpy`

```html
<p>My cat is very grumpy</p>
```

???

- This is what a typical HTML tag looks like – in this case, a paragraph
  - You can ask students:
    - What is the actual ‘tag’ here? What’s the tag name?
    - `p` for paragraph
- What do you notice about the syntax?
- The tag is repeated twice
- The second tag is different (has a “/” before the name)
- When the page is interpreted by the browser, what do you think is going to show up on the screen?
- Just the word `content`, not the tags
- At a high-level, we’re instructing the browser that the `Content` is a paragraph
- Don’t get caught up wanting to know every tag that exists, just try to understand this basic structure:
- We want to ‘markup’ our content so that the browser knows the structure of the document
- Good programmers don’t memorize a lot – they learn how it works and then use the language’s documentation

---

# Anatomy of an HTML element

![](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

---

# Nesting elements

## What is the difference?

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

```html
<p>My cat is <strong>very grumpy.</p></strong>
```

---

# Empty elements

Are self closing elements

```html
<img
  src="https://api.peteroftheday.com/random"
  alt="A random Picture of Peter Martin"
/>
```

---

# HTML attributes

Elements can also have attributes, which look like this:

![](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

- A space between it and the element name (or the previous attribute, if the element already has one or more attributes.)
- The attribute name, followed by an equals sign.
- An attribute value, with opening and closing quote marks wrapped around it.

---

# Absolute vs relative paths

We can differentiate between an **absolute** URL and a **relative** URL by looking only at the path part of the URL.

```js
'./i-am-relative-path/filename.txt';
// From my current position get to a directory and then get the file

```

```js
'../i-am-also-a-relative-path/filename.txt';
// From my current position go up to my parent directory and
// then to another directory and the get the file

```

```js
'https://www.ga.com'; // I am an absolute path

```

---

# Document

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

---

# `<head>`

```html
<head>
  <meta charset="utf-8" />
  <meta name="author" content="Pedro Martin" />
  <meta name="description" content="A Lesson about HTMLs" />
  <title>My test page</title>
</head>
```

- Can be thought of as the **brain** of the document
- Its properties are not part of the physical layout of the page
- Holds all of the properties Ex. the document’s title

---

# `<body>`

```html
<body>
  <p>This is my page</p>
</body>
```

- Represents the area from the top left corner of our page to the bottom right corner
- Holds the physical structure of the page
- Basically all of our work today will be in the body of the document

---

# Images

Images are placed using the `<img>` tag.

```html
<img src="img/image-name.jpg" alt="alternative text" />
```

The `img` tag requires a `src` attribute, which tells the browser where to find the image.
The `src` points to a resource a bit like the `href` of an `<a>` tag.

---

# Images

## How would you write the `src`?

There are different approaches to specifying an image location

Inside webroot, a relative path could be used:

```html
<img src="images/logo.png" />
```

## Relative path

```html
<img src="../images/logo.png" />
```

## Absolute Path

```html
<img src="https://api.peteroftheday.com/random" />
```

---

# Images

`alt` attribute provides a text description of the image

```html
<img
  src="https://api.peteroftheday.com/random"
  alt="A random picture of Peter Martin"
/>
```

---

# Images

## File Formats

There are four main image file formats:

- `png`
- `gif`
- `jpeg || jpg`
- `svg`

---

# Image

## `png`

- 24­ bit `png` have alpha transparency
- 8­ bit `png` have transparency but not semi­-transparency
- Large file­ size due to storing transparency info.

---

# Image

## `gif`

- Can be animated
- Have basic transparency, like an 8­ bit PNG
- Used in HTML emails as PNG not widely supported

---

# Image

## `jpeg` || `jpg`

- No transparency
- Most commonly used for photos
- Can be compressed to reduce file­size

---

# Image

## `svg`

- Vector based
- Most commonly used for logos and illustrations
- Drawn with points and curves
- Infinitely scalable

---

# Applying CSS and JavaScript to HTML

```html
<link rel="stylesheet" href="my-css-file.css" />
```

```html
<script src="my-js-file.js"></script>
```

---

# Setting the primary language of the document

```html
<html lang="en-GB"></html>
```

---

# Links

```html
<p>
  I'm creating a link to
  <a href="https://https://en.wikipedia.org/wiki/Main_Page">
    Wikipedia homepage </a
  >.
</p>
```

A basic link is created by wrapping the text or other content, you want to turn into a link inside an `<a>` element, and giving it an href attribute that will contain the web address you want the link to point to.

---

# Creating links

```html
<p>
  I'm creating a link to
  <a
    href="https://en.wikipedia.org/wiki/Star_Wars"
    title="Star Wars Wikipedia page"
  >
    Star Wars Wikipedia page </a
  >.
</p>
```

---

# Creating links

## Relative links

```html
<h2 id="Mailing_address">Mailing address</h2>
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

---

# Creating links

## Email links

```html
<p>
  <a href="mailto:mail@example.com"> Send an email </a>
</p>
```

---

# Document and website structure

```html
<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>
```

---

class: fullscreen, bg-yellow

# Let’s get writing!

---

class: fullscreen, bg-pink

# CSS

## Cascade Style Sheets

???

- Now we’re moving on to the `presentation` or `styling` of our web page
- Let’s break down what this name means

  - “Cascading” refers to the ability to have rules in different places that can override other rules
    - Why is this important? We’re going to touch on this a bit when we make our website responsive and we will see how styles are applied by priority
  - “Style Sheets” is important in understanding these presentation concerns as separate (and often multiple) files
  - We want to keep our presentation concerns in these style sheets, not in our HTML

---

# Cascading Style Sheets (CSS)

## How it looks?

```html
<h1>Hello World!</h1>
<p>This is my first CSS example</p>
```

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

---

# CSS Building blocks

## Declarations

.image-half[![](https://mdn.mozillademos.org/files/3665/css%20syntax%20-%20declaration.png)]

---

# CSS Building blocks

## Declaration blocks

.image-half[![](https://mdn.mozillademos.org/files/3667/css%20syntax%20-%20declarations%20block.png)]

---

# CSS Building blocks

## Selectors and rules

.image-half[![](https://mdn.mozillademos.org/files/3668/css%20syntax%20-%20ruleset.png)]

---

class: fullscreen, bg-yellow

# Let’s style things up!

---

class: fullscreen, bg-black

# Questions

---

# Solution

## [http://bit.ly/GAIntroToCodeSolution](http://bit.ly/GAIntroToCodeSolution)

---

class: frontpage

<a href="/">back to home</a>

<div>
  <h2>User Experience Immersive </h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
