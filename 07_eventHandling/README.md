# Event Handling in React

## Definition

Event Handling in React is the process of responding to user actions such as:

- Click
- Double Click
- Mouse Hover
- Key Press
- Form Submit
- Input Change

React uses event handlers to execute functions when an event occurs.

---

## Syntax

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

Here:

```text
onClick
   ↓
Event Occurs
   ↓
Function Executes
```

---

# Basic Example

```jsx
function App() {

  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

Output:

```text
Button Clicked
```

---

# Using Arrow Function

```jsx
function App() {

  return (
    <button
      onClick={() => {
        console.log("Clicked");
      }}
    >
      Click Me
    </button>
  );
}
```

---

# Event Object

React automatically passes an event object.

```jsx
function handleClick(event) {
  console.log(event);
}
```

```jsx
<button onClick={handleClick}>
  Click
</button>
```

---

# Access Event Properties

```jsx
function handleClick(event) {

  console.log(event.target);

}
```

Example Output:

```text
<button>Click</button>
```

---

# Passing Arguments

```jsx
function handleClick(name) {

  console.log(name);

}
```

```jsx
<button
  onClick={() =>
    handleClick("Rahul")
  }
>
  Click
</button>
```

Output:

```text
Rahul
```

---

# Multiple Functions

```jsx
function firstFunction() {
  console.log("First");
}

function secondFunction() {
  console.log("Second");
}
```

```jsx
<button
  onClick={() => {
    firstFunction();
    secondFunction();
  }}
>
  Click
</button>
```

Output:

```text
First
Second
```

---

# Common Events in React

## Click Event

```jsx
<button onClick={handleClick}>
  Click
</button>
```

---

## Double Click Event

```jsx
<button onDoubleClick={handleDoubleClick}>
  Double Click
</button>
```

---

## Mouse Over Event

```jsx
<div onMouseOver={handleHover}>
  Hover Here
</div>
```

---

## Mouse Leave Event

```jsx
<div onMouseLeave={handleLeave}>
  Mouse Leave
</div>
```

---

## Input Change Event

```jsx
<input
  onChange={handleChange}
/>
```

Example:

```jsx
function handleChange(event) {

  console.log(event.target.value);

}
```

---

## Key Down Event

```jsx
<input
  onKeyDown={handleKeyDown}
/>
```

---

## Form Submit Event

```jsx
<form onSubmit={handleSubmit}>
  <button>Submit</button>
</form>
```

---

# Prevent Default Behavior

Normally form submission reloads the page.

```jsx
function handleSubmit(event) {

  event.preventDefault();

  console.log("Form Submitted");

}
```

---

# Event Handling with useState

```jsx
import { useState } from "react";

function App() {

  const [count, setCount] =
    useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}
```

---

# Event Flow

```text
User Action
      ↓
Event Triggered
      ↓
Handler Function Executes
      ↓
State Updates (Optional)
      ↓
Component Re-renders
```

---

# React Event Naming Rules

HTML:

```html
onclick
onchange
onsubmit
```

React:

```jsx
onClick
onChange
onSubmit
```

React uses camelCase.

---

# Important Rules

## Incorrect

```jsx
<button onClick={handleClick()}>
```

Function executes immediately.

---

## Correct

```jsx
<button onClick={handleClick}>
```

Function executes only when clicked.

---

# Interview Questions

## What is Event Handling?

Event Handling is the process of executing functions in response to user actions.

---

## How are events written in React?

Using camelCase.

Example:

```jsx
onClick
onChange
onSubmit
```

---

## What is the event object?

An object automatically passed by React containing information about the event.

---

## Why use preventDefault()?

To stop the browser's default behavior.

Example:

```jsx
event.preventDefault();
```

---

# Quick Revision

## Button Click

```jsx
<button onClick={handleClick}>
  Click
</button>
```

## Input Change

```jsx
<input onChange={handleChange} />
```

## Form Submit

```jsx
<form onSubmit={handleSubmit}>
```

## Prevent Reload

```jsx
event.preventDefault();
```

---

# Common Events Summary

| Event | Purpose |
|---------|---------|
| onClick | Button Click |
| onDoubleClick | Double Click |
| onMouseOver | Mouse Hover |
| onMouseLeave | Mouse Leave |
| onChange | Input Change |
| onKeyDown | Key Press |
| onSubmit | Form Submit |

---

# Memory Trick

```text
User Action
      ↓
Event Trigger
      ↓
Handler Function
      ↓
React Updates UI
```

## Key Takeaways

- Event Handling responds to user actions.
- React events use camelCase naming.
- Functions are attached to events using handlers.
- Event objects provide information about the event.
- State can be updated inside event handlers.
- `preventDefault()` stops default browser behavior.
```` 🚀