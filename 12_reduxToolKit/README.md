# Redux Toolkit (RTK)

## What is Redux?

Redux is a state management library used to manage and share data between multiple React components.

Instead of passing props through many components, Redux stores data in a **central store** that any component can access.

---

## Why Redux?

### Without Redux

- Prop Drilling
- Difficult State Sharing
- Complex Data Flow

### With Redux

- Centralized State
- Easy Data Sharing
- Predictable State Updates
- Better Scalability

---

## What is Redux Toolkit?

Redux Toolkit (RTK) is the official and recommended way to write Redux.

It simplifies Redux development by reducing boilerplate code.

---

## Why Redux Toolkit?

Old Redux requires:

- Actions
- Action Types
- Reducers
- Store Configuration
- Lots of Boilerplate Code

Redux Toolkit provides:

- Less Code
- Cleaner Syntax
- Better Performance
- Easy State Management
- Built-in Best Practices

---

## Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

## Folder Structure

```text
src
│
├── app
│     store.js
│
├── features
│      counter
│          counterSlice.js
│
├── App.jsx
└── main.jsx
```

---

## Store

The Store is the central place where the application's state is stored.

```text
Components
      ↓
 Redux Store
      ↓
 Shared State
```

---

## configureStore()

Creates the Redux Store.

```jsx
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

---

## Slice

A Slice contains:

- State
- Reducers
- Actions

Each feature has its own slice.

---

## createSlice()

```jsx
createSlice({
  name,
  initialState,
  reducers,
});
```

---

## Example

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",

  initialState,

   reducers: {
    increment: (state) => {
      state.value += 1
    },
    reset: (state) => {
      state.value =0
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

---

## initialState

Stores the default state.

```jsx
const initialState = {
  value: 0,
};
```

---

## Reducers

Reducers update the state.

```jsx
reducers: {
  increment(state) {
    state.value++;
  },
}
```

---

## Actions

Actions tell Redux what operation should be performed.

```jsx
dispatch(increment());
```

---

## Provider

Makes the Redux Store available to all components.

```jsx
import { Provider } from "react-redux";
```

```jsx
<Provider store={store}>
  <App />
</Provider>
```

---

## useSelector()

Reads data from the Redux Store.

```jsx
const count = useSelector((state) => state.counter.value);
```

---

## useDispatch()

Dispatches actions to update the Store.

```jsx
const dispatch = useDispatch();
```

```jsx
dispatch(increment());
```

---

## Payload

Extra data sent with an action.

Reducer

```jsx
incrementByAmount(state, action) {
  state.value += action.payload;
}
```

Dispatch

```jsx
dispatch(incrementByAmount(10));
```

---

## Data Flow

```text
User Action
      ↓
dispatch()
      ↓
Action
      ↓
Reducer
      ↓
Redux Store Updates
      ↓
useSelector()
      ↓
Component Re-renders
```

---

## Advantages

- Centralized State
- Predictable Data Flow
- Less Boilerplate
- Easy Debugging
- Better Performance
- Scalable Applications

---

## Redux vs Redux Toolkit

| Redux | Redux Toolkit |
|--------|---------------|
| More Code | Less Code |
| Complex Setup | Easy Setup |
| Manual Configuration | Built-in Helpers |
| Hard to Learn | Beginner Friendly |

---

## Interview Questions

### What is Redux?

Redux is a state management library used to manage global application state.

### What is Redux Toolkit?

Redux Toolkit is the official package that simplifies Redux.

### What is Store?

A central place where application state is stored.

### What is configureStore()?

Creates and configures the Redux Store.

### What is createSlice()?

Creates reducers and actions automatically.

### What is initialState?

The default state of a slice.

### What is useSelector()?

Reads data from the Redux Store.

### What is useDispatch()?

Dispatches actions to update the Store.

### What is Payload?

Extra data sent with an action.

Example:

```jsx
dispatch(addTodo("Learn Redux Toolkit"));
```

---

## Quick Revision

```text
Redux
   ↓
Redux Toolkit
   ↓
configureStore()
   ↓
createSlice()
   ↓
Provider
   ↓
useSelector()
   ↓
useDispatch()
   ↓
dispatch()
   ↓
Reducer
   ↓
Store Update
   ↓
UI Re-render
```

---

## Memory Trick

```text
Store
   ↓
Slice
   ↓
Action
   ↓
Dispatch
   ↓
Reducer
   ↓
Updated Store
   ↓
React UI
```

---

## Key Takeaways

- Redux Toolkit is the official way to use Redux.
- `configureStore()` creates the Redux Store.
- `createSlice()` creates state, reducers, and actions together.
- `useSelector()` reads data from the Store.
- `useDispatch()` updates the Store by dispatching actions.
- Redux Toolkit reduces boilerplate and simplifies state management.