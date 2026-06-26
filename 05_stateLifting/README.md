# State Lifting in React

## Definition

State Lifting (Lifting State Up) is the process of moving state from child components to their closest common parent component so that multiple components can share and use the same data.

---

## Why Do We Need State Lifting?

When two sibling components need access to the same data, React cannot directly share state between them.

Example:

```text
Parent
 ├── Child A
 └── Child B