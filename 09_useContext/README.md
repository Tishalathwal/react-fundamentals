# useContext Hook

`useContext` Hook is used to consume data from a Context.

---

# Prop Drilling

**Prop Drilling** means passing props through multiple intermediate components that don't actually need them.

Example:

```text
Parent
  ↓
Child1
  ↓
Child2
  ↓
Child3
```

Only **Child3** needs the data, but every component passes it along.

### Problems of Prop Drilling

- Messy code
- Hard to maintain
- Too many props

---

## Solution

To prevent Prop Drilling, we use the **useContext Hook**.

---

# useContext

`useContext` allows components to access shared data directly without passing props manually through every level.

Example:

```text
Parent
   │
Context
   │
Child3
```

✅ No Prop Drilling

---

# Context

Context is a way to share data globally among components.

---

# Steps of useContext

## Step 1: Create Context

```jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

---

## Step 2: Provide Context

```jsx
import UserContext from "./UserContext";

function App() {
  const user = "Tisha";

  return (
    <UserContext.Provider value={user}>
      <Child1 />
    </UserContext.Provider>
  );
}
```

---

## Step 3: Consume Context

```jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function Child3() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}
```

---

# Flow

```text
createContext()
      ↓
Provider
      ↓
value passed
      ↓
useContext()
      ↓
Data received
```