# ⭐ React

React is a **JavaScript library** for building interactive user interfaces. It is developed and maintained by **Meta (Facebook)**.

### 🔥 Why React?

* Component-based architecture
* Fast rendering with Virtual DOM
* Reusable UI elements
* Strong ecosystem (hooks, libraries, tools)
* Easy to learn for JavaScript developers

---

# 📌 Core Concepts

## 1. Components

React apps are built using **components**, which are reusable UI blocks. Components can be:

* **Functional components** (most commonly used)
* **Class components** (older style)

### Functional Component Example

```
function Welcome() {
  return <h1>Hello React!</h1>;
}
```

---

## 2. JSX

JSX stands for **JavaScript XML**. It allows writing HTML-like code inside JavaScript.

Example:

```
const element = <h1>Hello, JSX!</h1>;
```

---

## 3. Props

Props are **data passed from parent to child components**.

Example:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Usage:

```
<Welcome name="Rahul" />
```

---

## 4. State (useState)

State represents **dynamic data** in a component.

```
import { useState } from "react";

const [count, setCount] = useState(0);
```

### Updating State

```
setCount(count + 1);
```

---

## 5. Event Handling

Events are handled using functions.

```
<button onClick={handleClick}>Click Me</button>
```

---

## 6. Conditional Rendering

```
{isLogged ? <Dashboard /> : <Login />}
```

---

## 7. Lists and Keys

```
const items = ["A", "B", "C"];

items.map((item, index) => (
  <li key={index}>{item}</li>
));
```

---

## 8. useEffect Hook

Used for **side effects** like API calls.

```
useEffect(() => {
  console.log("Component Loaded");
}, []);
```

Dependencies example:

```
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

---

# ⚙️ Additional Hooks

## 9. useRef

Used to reference DOM elements or store values.

```
const inputRef = useRef();
```

## 10. useContext

Used to avoid prop drilling.

```
const value = useContext(MyContext);
```

## 11. useReducer

Useful for complex state management.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

---

# 🧱 Component Lifecycle (Functional)

React lifecycle using hooks:

* Mount → useEffect with `[]`
* Update → useEffect with `[dependency]`
* Unmount → return cleanup function

```
useEffect(() => {
  return () => console.log("Unmounted");
}, []);
```

---

# 📦 React Router Basics

```
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

Usage:

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

# 🌐 API Calls (Fetch & Axios)

### Using fetch:

```
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

### Using Axios:

```
axios.get("/api").then(res => setData(res.data));
```

---

# 🎨 Styling in React

* CSS files
* Inline styles
* CSS Modules
* Styled-components
* Tailwind CSS

Example:

```
<div style={{ color: "red" }}>Hello</div>
```

---

# 🧩 State Lifting

Passing state from child → parent using callback.

```
Parent → defines function
Child → calls function with value
```

---

# 📁 Folder Structure (Recommended)

```
src/
│── components/
│── pages/
│── hooks/
│── context/
│── assets/
│── App.jsx
│── main.jsx
```
