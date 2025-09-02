## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **`Ans :`** **getElementById** usually returns a single element with the give `id`.

     **getElementsClassName** returns a Live HTMLCollection of with the same `class` name.

     **querySelector** returns the first element that matches the CSS selector.

     **querySelectorAll** returns **NodeList** of all the CSS selector's matching elements.

## 2. How do you create and insert a new element into the DOM?

- **`Ans :`** To create an elements we have to write :
```js
const section = document.getElementById('div-container')

const newDiv = document.createElement('div')
newDiv.innerText = 'I have added new element'
section.appendChid(newDiv) 

```

## 3. What is Event Bubbling and how does it work?
- **`Ans :`** When we perform a specipic event in an HTML element, it first runs the event handler on the element, then moves to the parent of that element, and went accordingly with it's another parent with the traversing of DOM tree towards it's root element.

- **Child** Clicked and then **Parent** clicked.

## 4. What is Event Delegation in JavaScript? Why is it useful?

- **`Ans :`** A technique where instead of adding event listeners to many child elements, you add one listener to a parent and detect which child triggered it using event.target.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- **`Ans :`** 
**preventDefault() :** It prevents the default action of an event on DOM elements.

```js
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Form submission blocked")
}) 
```

- **stopPropagation() :** It stops the event from Bubbling up to its parent elements.

```js
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("Child clicked, parent will not get trigger")
})
```