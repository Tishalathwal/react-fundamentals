# Conditional Rendering in React

## Definition

Conditional Rendering is a technique in React used to display different UI elements based on certain conditions.

> React decides what to render on the screen depending on a condition.

---

## Why Use Conditional Rendering?

Common use cases:

- Login / Logout screens
- Loading indicators
- Error messages
- User authentication
- Admin panels
- Show/Hide components
- Empty cart messages

---

## Basic Concept

### JavaScript

```js
if(isLoggedIn){
  console.log("Welcome");
}
else{
  console.log("Please Login");
}
```

### React

```jsx
{
  isLoggedIn
    ? <h1>Welcome</h1>
    : <h1>Please Login</h1>
}
```

---

# Methods of Conditional Rendering

## 1. Using if-else

```jsx
function App() {

  const isLoggedIn = true;

  if(isLoggedIn){
    return <h1>Welcome User</h1>;
  }

  return <h1>Please Login</h1>;
}
```

---

## 2. Using Variables

```jsx
function App() {

  const isLoggedIn = false;

  let content;

  if(isLoggedIn){
    content = <h1>Welcome</h1>;
  }
  else{
    content = <h1>Please Login</h1>;
  }

  return content;
}
```

---

## 3. Using Ternary Operator (Most Common)

### Syntax

```jsx
condition ? trueValue : falseValue
```

### Example

```jsx
function App() {

  const isLoggedIn = true;

  return (
    <>
      {
        isLoggedIn
          ? <h1>Welcome</h1>
          : <h1>Please Login</h1>
      }
    </>
  );
}
```

---

## 4. Using Logical AND (&&)

Used when content should render only if a condition is true.

```jsx
function App() {

  const isAdmin = true;

  return (
    <>
      {
        isAdmin &&
        <h1>Admin Panel</h1>
      }
    </>
  );
}
```

### Output

```text
Admin Panel
```

If `isAdmin` is false:

```text
Nothing renders
```

---

## 5. Using Logical OR (||)

Used to provide default values.

```jsx
const username = "";

return (
  <h1>
    {username || "Guest"}
  </h1>
);
```

### Output

```text
Guest
```

---

# Conditional Rendering with useState

```jsx
import { useState } from "react";

function App() {

  const [show, setShow] =
    useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>

      {
        show &&
        <h1>Hello React</h1>
      }
    </>
  );
}
```

---

# Loading Example

```jsx
function App() {

  const loading = true;

  return (
    <>
      {
        loading
          ? <h1>Loading...</h1>
          : <h1>Data Loaded</h1>
      }
    </>
  );
}
```

---

# Flow of Conditional Rendering

```text
Condition Checked
        ↓
True or False
        ↓
React Chooses JSX
        ↓
Component Renders
```

---

# Common Examples

## Login System

```jsx
{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

## Cart Example

```jsx
{
  cartItems > 0 &&
  <h1>{cartItems} Items in Cart</h1>
}
```

## Error Message

```jsx
{
  error &&
  <p>Error Occurred</p>
}
```

---

# Rules

## Incorrect

```jsx
return (
  <div>
    if(isLoggedIn){
      <h1>Hello</h1>
    }
  </div>
);
```

## Correct

```jsx
return (
  <div>
    {
      isLoggedIn
        ? <h1>Hello</h1>
        : <h1>Login</h1>
    }
  </div>
);
```

---

# Advantages

- Dynamic UI
- Better User Experience
- Cleaner Code
- Easy Data-Based Rendering

---

# Interview Questions

## What is Conditional Rendering?

Conditional Rendering is the process of displaying different UI elements based on specific conditions.

## Which operator is most commonly used?

Ternary Operator

```jsx
condition
  ? trueValue
  : falseValue
```

## When should we use &&?

```jsx
isAdmin && <AdminPanel />
```

Use when content should appear only if a condition is true.

---

# Quick Revision

## Ternary Operator

```jsx
{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

## AND Operator

```jsx
{
  isAdmin &&
  <AdminPanel />
}
```

## OR Operator

```jsx
{
  username || "Guest"
}
```

---

# Comparison Table

| Method | Use Case |
|----------|-----------|
| if-else | Large conditions |
| Variables | Complex JSX |
| Ternary Operator | Most common |
| && Operator | Show only when true |
| || Operator | Default values |

---

# Memory Trick

```text
Condition
    ↓
React Checks
    ↓
Choose JSX
    ↓
Render UI
```

## Key Takeaways

- Conditional Rendering displays UI based on conditions.
- Ternary Operator is the most commonly used approach.
- && is used for rendering content only when true.
- || is used for default values.
- State changes trigger re-rendering and re-evaluate conditions.