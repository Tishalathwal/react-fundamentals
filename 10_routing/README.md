# React Router Notes

## What is Routing?

**Routing** is the process of displaying different pages/components based on the URL without reloading the entire website.

Example URLs:

```text
/components
 /about
 /contact
```

React is a **Single Page Application (SPA)**, meaning only the required component changes instead of reloading the whole page.

---

# Why do we need Routing?

Without routing:
- Only one page is displayed.

With routing:
- Home Page
- About Page
- Profile Page
- Contact Page
- etc.

---

# Route Component

The `Route` component tells React which component should be rendered for a specific URL.

### Syntax

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

### Meaning

If the URL is:

```text
/about
```

React renders:

```jsx
<About />
```

---

# Creating Routes

```jsx
import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

---

# Navigation using Link

Instead of using an HTML anchor tag:

```html
<a href="/about">About</a>
```

Use React Router's `Link`.

### Why?

Because an anchor tag refreshes the entire page.

React applications are **Single Page Applications (SPA)**, so we should use `Link`.

### Syntax

```jsx
import { Link } from "react-router-dom";

<Link to="/about">
  About
</Link>
```

---

# NavLink

`NavLink` works like `Link`, but it provides an **active** feature.

It allows us to apply different CSS styles to the currently active route.

### Syntax

```jsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  About
</NavLink>
```

### Difference between Link and NavLink

| Link | NavLink |
|------|----------|
| Used for navigation | Used for navigation |
| No active styling | Supports active styling |
| Simpler | Better for navigation menus |

---

# useNavigate Hook

`useNavigate()` is a React Router hook that allows us to navigate programmatically from one route to another.

### Import

```jsx
import { useNavigate } from "react-router-dom";
```

### Syntax

```jsx
const navigate = useNavigate();
```

### Example

```jsx
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  return (
    <button onClick={handleClick}>
      Go to About
    </button>
  );
}
```

---

# Route Parameters (useParams)

Route Parameters are dynamic values present in the URL.

Example URLs:

```text
/product/101
/product/102
/product/103
```

Here,

```text
101
102
103
```

are dynamic route parameters.

### Route Configuration

```jsx
{
  path: "/product/:id",
  element: <Product />
}
```

### Access Parameter

```jsx
import { useParams } from "react-router-dom";

function Product() {

  const { id } = useParams();

  return <h1>Product ID: {id}</h1>;
}
```

---

# Nested Routing

Nested Routing is used when one route contains child routes.

Example:

```text
/contact/number
/contact/id
```

### Route Structure

```jsx
{
  path: "/contact",
  element: <Contact />,
  children: [
    {
      path: "number",
      element: <Number />,
    },
    {
      path: "id",
      element: <Id />,
    },
  ],
}
```

---

# Outlet

`Outlet` is used inside the parent component to display child routes.

### Example

```jsx
import { Outlet } from "react-router-dom";

function Contact() {

  return (
    <>
      <h1>contact Page</h1>

      <Outlet />
    </>
  );
}
```

Without `Outlet`, child routes will not be displayed.

---

# Wildcard Route (404 Page)

If the user enters an invalid URL, a wildcard route is used.

```jsx
{
  path: "*",
  element: <NotFound />
}
```

This displays a custom page which we enter in NotFound file.

---

# Flow of React Router

```text
Install React Router
        ↓
Create Browser Router
        ↓
Define Routes
        ↓
Use Router Provider
        ↓
Navigate using Link/NavLink
        ↓
Navigate Programmatically using useNavigate
        ↓
Access Dynamic Routes using useParams
        ↓
Use Nested Routes with Outlet
        ↓
Handle Invalid Routes using "*"
```

---

# Quick Revision

- **Routing** → Display different components based on URL.
- **SPA** → Single Page Application (no full page reload).
- **Route** → Maps a URL to a component.
- **createBrowserRouter** → Creates application routes.
- **Link** → Navigation without page refresh.
- **NavLink** → Link + active styling.
- **useNavigate()** → Navigate programmatically.
- **useParams()** → Read dynamic route parameters.
- **Nested Routing** → Parent route with child routes.
- **Outlet** → Renders child routes.
- **Wildcard (`*`)** → Handles invalid URLs (404 page).