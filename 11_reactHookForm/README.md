# React Hook Form (React Hook Form in 1 Video | Love Babbar React Series Episode 12)

## What is React Hook Form?

React Hook Form (RHF) is a library used to build and manage forms in React with less code, better performance, and built-in validation.

### Installation

```bash
npm install react-hook-form
```

---

# Why React Hook Form?

Without React Hook Form:

- More code
- Multiple useState hooks
- Manual validation
- More re-renders

With React Hook Form:

- Less code
- Easy validation
- Better performance
- Fewer re-renders
- Easy error handling

---

# Main Hook

Import:

```jsx
import { useForm } from "react-hook-form";
```

Syntax:

```jsx
const {
  register,
  handleSubmit,
  watch,
  reset,
  setValue,
  getValues,
  formState: { errors, isSubmitting }
} = useForm();
```

---

# useForm()

`useForm()` is the main hook that manages the entire form.

It returns several useful methods.

```jsx
const form = useForm();
```

---

# register()

Used to register an input field with React Hook Form.

Syntax:

```jsx
<input {...register("firstName")} />
```

Example:

```jsx
<input
  type="text"
  {...register("name")}
/>
```

Now RHF starts tracking this field.

---

# handleSubmit()

Used to handle form submission.

Syntax:

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

Example:

```jsx
function onSubmit(data){
  console.log(data);
}
```

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

Output:

```text
{
 name: "Rahul"
}
```

---

# Complete Example

```jsx
import { useForm } from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit
  } = useForm();

  function submitHandler(data){
    console.log(data);
  }

  return(

    <form onSubmit={handleSubmit(submitHandler)}>

      <input
        {...register("firstName")}
      />

      <input type="submit" />

    </form>

  );
}
```

---

# Validation

Validation rules are passed inside register().

Example:

```jsx
<input
  {...register("name", {
    required: true
  })}
/>
```

If input is empty

```text
Validation Error
```

---

# Required Validation

```jsx
<input
  {...register("name", {
    required: true
  })}
/>
```

---

# Minimum Length

```jsx
<input
  {...register("username", {
    minLength: 5
  })}
/>
```

---

# Maximum Length

```jsx
<input
  {...register("username", {
    maxLength: 10
  })}
/>
```

---

# Pattern Validation

Email Example

```jsx
<input
  {...register("email", {
    pattern:
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  })}
/>
```

---

# Custom Error Messages

```jsx
<input
  {...register("name", {
    required: "Name is Required"
  })}
/>
```

Show Error

```jsx
{
  errors.name &&
  <p>{errors.name.message}</p>
}
```

Output

```text
Name is Required
```

---

# errors Object

Contains all validation errors.

Example

```jsx
console.log(errors);
```

Output

```text
errors.name
errors.email
errors.password
```

---

# Display Error

```jsx
{
  errors.email &&
  <span>
    {errors.email.message}
  </span>
}
```

---

# Multiple Validations

```jsx
<input
  {...register("password",{

    required:"Password Required",

    minLength:{
      value:8,
      message:"Minimum 8 characters"
    }

  })}
/>
```

---

# isSubmitting

Tells whether the form is currently submitting.

```jsx
const {
 formState:{
   isSubmitting
 }
} = useForm();
```

Example

```jsx
<button disabled={isSubmitting}>
 Submit
</button>
```

---

# reset()

Clears the form.

```jsx
reset();
```

Example

```jsx
function submitHandler(data){

 console.log(data);

 reset();

}
```

---

# getValues()

Returns current form values.

```jsx
const values = getValues();
```

---

# setValue()

Updates input value programmatically.

```jsx
setValue("name","Rahul");
```

---

# watch()

Used to monitor field values.

```jsx
const name = watch("name");
```

Whenever user types

```text
watch updates automatically
```

---

# Form Flow

```text
User Types
      ↓
register()
      ↓
React Hook Form Tracks Data
      ↓
Validation
      ↓
Errors Object Updated
      ↓
handleSubmit()
      ↓
submitHandler(data)
```

---

# Validation Flow

```text
Input
   ↓
register()
   ↓
Rules Checked
   ↓
Valid ?
 ↓       ↓
Yes      No
 ↓        ↓
Submit   errors
```

---

# Advantages

- Less code
- Better performance
- Built-in validation
- Easy error handling
- Less re-rendering
- Cleaner forms

---

# Interview Questions

## What is React Hook Form?

A library for handling forms efficiently in React.

---

## Why React Hook Form?

To reduce boilerplate code and improve performance.

---

## What does register() do?

Registers an input field with React Hook Form.

---

## What does handleSubmit() do?

Handles form submission after validation.

---

## What is errors?

An object containing validation errors.

---

## What does reset() do?

Resets all form fields.

---

## What is watch()?

Observes changes in input values.

---

## What is setValue()?

Updates form values programmatically.

---

## What is isSubmitting?

Indicates whether the form is currently being submitted.
