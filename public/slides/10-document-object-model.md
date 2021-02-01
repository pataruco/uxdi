import FrontPage from '../components/slides-components/front-page';
import CodePane from '../components/slides-components/code-pane';
import BackgroundChange from '../components/slides-components/background-change';
import { Row, Column } from '../components/slides-components/layout';

<FrontPage title="10 Document Object Model (DOM)" />

---

<BackgroundChange />

## Agenda

- Identify the role of JavaScript in front-end web development.
- Access properties of the DOM using JavaScript object syntax.
- Use DOM methods to respond to user actions with event listeners.
- Talk about your final projects

---

<BackgroundChange />

## Objects

Before start to talk about the **DOM**, let's talk about Objects in JavaScript.

An object is a collection of properties that are made up of `key:value,` pairings.

<CodePane language="javascript">
  {`const myObject = {
  key: value,
};`}
</CodePane>

The key is the name of the property, the value can be anything:

a `String`, a `Number`, a `Function`, even another `Object`

---

<BackgroundChange />

## Objects

An object in JS can be compared to an object in real life. It has a number of properties that define it.

<CodePane language="javascript">
  {`const car = {
  make: 'Tesla',
  model: 'Model 3',
  price: '£30,000',
};`}
</CodePane>

We can access these properties using dot notation

<CodePane language="javascript">
  {`car.make; //returns 'Tesla'
car.make = 'Ford';
car.make; // returns 'Ford'`}
</CodePane>

---

<BackgroundChange />

## The Document Object Model (DOM)

JavaScript interacts with our HTML document. It can read info on the page and make changes to any element on the page.

To learn how to do this we need a common language to describe the construction of the document and the elements within it.

**The Document Object Model** is a representation of the page used by JavaScript to interact with all the elements.

We can visualise the DOM as a tree like structure of each element and their heirarchy. But the DOM is more than just a representation of the HTML. Each element on the page is an object that has certain characteristics and can perform certain actions.

The document is an object and has a method for finding elements within it. Those elements are also objects which have properties like their style or inner text content. Elements also have methods for actions like getting, setting or removing attributes.

---

<BackgroundChange />

## DOM tree

A DOM tree is a kind of tree whose nodes represent an HTML document contents. Each HTML document has a unique DOM tree representation. For example, the following document:

<CodePane>
  {`<html>
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>`}
</CodePane>

Has a DOM tree that looks like this:

![DOM tree](https://media.prod.mdn.mozit.cloud/attachments/2020/01/29/17084/3d1185f6bd10a5e25fe475a50ebca710/dom-string.png)

---

<BackgroundChange />

## The DOM

A Webpage Is Just a Bunch of Objects

<img
  src="https://pataruco.s3.amazonaws.com/ga/fewd/dom-optimised.svg"
  width="400"
/>

Everything you see in the browser is represented as an object in JS

---

<BackgroundChange />

## DOM Three Big Objects

### Window

The whole web browser; mostly used for browser-level settings like the current url. All global variables are stored here too.

### Document

The current webpage. This object has the functionality we want to use when accessing elements (other objects) on the page.

### Console

A scratch pad for development-related messages; highly useful in debugging.

---

<BackgroundChange />

## The DOM

Browsers read your HTML and create an object in the computer's memory for each part.
The Document Object Model (DOM) is the browser's JavaScript representation of your HTML elements.

### Getters and Setters

The main thing we're doing with JS is getting objects from the DOM and performing actions with them (moving, hiding, updating text, changing attributes etc).

The methods that get something from a webpage are called **getters**.

The methods that change something on the webpage are called **setters**.

---

<BackgroundChange />

## The DOM

### Methods

Getters and setters access and modify objects. They are both types of methods. **Methods** belong to JavaScript objects, including DOM elements.

Think of methods as the functions that an object can use. A guitar, for example, might have the following methods:

- `playChord(chord)`
- `playNote(note)`
- `changeTempo(tempo)`
- `changeVolume(volume)`

---

<BackgroundChange />

## The DOM

### Properties

Objects contain data as well as methods — information that describes the object (height, width, classes, etc). These pieces of information are called **properties**.

| Property                  | Description                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| `someElement.classList`   | A list of the classes belonging to a DOM element.                                          |
| `someElement.id`          | The ID of an element, if it has one.                                                       |
| `someElement.style.color` | The color of an element's text.                                                            |
| `window.location.href`    | The window object's location details, including the page's href (hypertext reference/URL). |

---

<BackgroundChange />

## The DOM

### Getters

<CodePane language="javascript">
  {`
const gaData = document.getElementById('ga');
//             |______| |____________| |___|
//                 |           |         |
//              Object      Method    Parameter
//                    (a getter method)
  `}
</CodePane>

Once you get something from the DOM, you can use a variable to store it in memory for future manipulation.

<CodePane language="javascript">{`const gaData = document.getElementById('ga');`}</CodePane>

Now that we have our element, gaData, we can access its properties:

<CodePane language="javascript">
  {`gaData.style.color;
gaData.innerText;
gaData.classList;`}
</CodePane>

---

<BackgroundChange />

## The DOM

### Manipulating an Element's Classes

We're mostly going to manipulate classes to make things happen on our pages.

<CodePane language="javascript">
  {`    gaData.classList.toggle('show');
/*  |____| |_______| |____| |____|
//     |        |       |      |
//  Object   Property   |   Class name
//                      |
//                    Method  
//              (a getter method)`}
</CodePane>

---

<BackgroundChange />

## The DOM

### Manipulating an Element's Classes

There are multiple class related properties and methods relating to classes in JS

<CodePane language="javascript">
  {`const gaData = document.getElementById('ga');
\n// gives us the current value of the class attribute
gaData.className; 
\n// add a class to the element
gaData.classList.add('new-class'); 
\n// remove the class
gaData.classList.remove('new-class'); 
\n// true/false
gaData.classList.contains('new-class'); 
\n// add the class if it's not present, remove it if it is
gaData.classList.toggle('new-class');`}

</CodePane>

---

<BackgroundChange />

## Events and Listeners

Anytime a user interacts with a webpage, the browser classifies that action as an event.

In our JS code, we can listen for events in the browser and trigger functions in response using event listeners.

<CodePane language="javascript">
  {`// When object is clicked, the action function is called
object.addEventListener('click', action)  
`}
</CodePane>

### Get, Then Listen

We'll often **get** an element and then **set** an event listener on it. Once the event occurs, the listener will execute the function it was given.

<CodePane language="javascript">
  {`const ga = document.getElementById('ga');
function sayHello() {
  console.log('hello!');
}
ga.addEventListener('click', sayHello);
`}
</CodePane>

---

<BackgroundChange />

## Events and Listeners

We called this pattern the

### The three **E**'s

1.  The **E**lement(s) we want to interact with
2.  The **E**vent we want to kick off the interaction
3.  The **E**xecution: what happens next and what elements are involved

We can write this out in "normal" language first (**Pseudocode**)

---

<BackgroundChange />

## Events and Listeners

There are many events that occur in the browser as the user interacts with the page, these are few of them:

- click
- submit
- resize
- scroll
- hover
- touch
- drag and drop

[Full list](https://developer.mozilla.org/en-US/docs/Web/Events)

---

<BackgroundChange />

## Pair Lab

### [Color switcher](https://codepen.io/pataruco/pen/bGVmGXo)

---

<BackgroundChange />

## Solo Lab

### [Traffic lights](https://codepen.io/pataruco/pen/oNvxGxR)

---

<BackgroundChange />

## Bonus Lab

### [Score keeper](https://codepen.io/pataruco/pen/pLXwaz)

---

<BackgroundChange />

## Final project brief

- [Link to brief]()

---

<FrontPage title="End of presentation" />