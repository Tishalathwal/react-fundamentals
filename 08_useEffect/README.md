# useEffect Hook (React)

## What is useEffect?

`useEffect` is a React Hook used to perform **side effects** in functional components.

### Syntax

```jsx
useEffect(() => {
  // Side Effect Code

  return () => {
    // Cleanup Code (Optional)
  };
}, [dependencies]);
```

---

## Parameters

### 1. Effect Function
This function contains the side effect code.

```jsx
useEffect(() => {
  console.log("Component Rendered");
});
```

---

### 2. Cleanup Function (Optional)

Runs before the next effect or when the component unmounts.

```jsx
useEffect(() => {
  console.log("Component Mounted");

  return () => {
    console.log("Cleanup");
  };
}, []);
```

---

### 3. Dependency Array

Controls when the effect should run.

---

# Variations of useEffect

## 1. No Dependency Array

Runs after **every render**.

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

---

## 2. Empty Dependency Array

Runs **only once** after the first render.

```jsx
useEffect(() => {
  console.log("Runs only once");
}, []);
```

---

## 3. With Dependencies

Runs when the dependency value changes.

```jsx
useEffect(() => {
  console.log("Count Changed");
}, [count]);
```

Multiple dependencies are also allowed.

```jsx
useEffect(() => {
  console.log("Updated");
}, [count, name]);
```

---

## 4. Cleanup Function

```jsx
useEffect(() => {
  console.log("Effect Started");

  return () => {
    console.log("Cleanup");
  };
}, [count]);
```

Cleanup runs:
- Before the effect runs again.
- When the component unmounts.

---

# What are Side Effects?

Side effects are operations that interact with things outside React rendering.

Examples:

- API Calls
- Timers (`setTimeout`, `setInterval`)
- Event Listeners
- Local Storage
- DOM Manipulation
- WebSocket Connections

---

# When does useEffect run?

- After React updates the DOM.
- Never during rendering.

---

# Real Example

```jsx
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default App;
```

---

# Summary

| Dependency Array | Runs When |
|------------------|-----------|
| No Array | Every Render |
| `[]` | Only First Render |
| `[count]` | Whenever `count` Changes |
| Cleanup Function | Before Re-run & On Unmount |

---

## Interview Questions

### What is useEffect?
A React Hook used to perform side effects in functional components.

### What are side effects?
Operations like API calls, timers, event listeners, local storage, etc.

### When does useEffect run?
After React updates the DOM.

### Why do we use Cleanup?
To remove subscriptions, timers, or event listeners and prevent memory leaks.

### Can useEffect have multiple dependencies?
Yes.

```jsx
useEffect(() => {
  console.log("Updated");
}, [count, name, age]);
```