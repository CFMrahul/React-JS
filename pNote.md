## Evaluated expression {} :-

- This is written inside curly braces {}.
- React evaluates this code and displays the result in the UI.
- Variables, functions, calculations can all be evaluated
- Inside JSX, only expressions are allowed—not statements.
- The result of an expression can be a string, a number, or a component.

# Syntax :-

```
function App() {
const name = "Rahul";
const age = 22;
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age after 5 years: {age + 5}</p>
    </div>
  );
}
```

## useState :-

- `tuseStae` is a React Hook that manages state.
- This is used to add state to functional components.
- This allows you to store dynamic data inside the component.
- `useState` is a function that returns an array.
- This array contains the current state value and an update function.
- The component automatically re-renders when the state changes.
- The initial value is passed to `useState(initialValue)`.

# Syntax :-

```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
```
## Props :-

- The full form of "Props" is "properties," which is used to pass data within React components.
- It provides a standard mechanism for sending data from a parent component to a child component.
- Props are read-only, meaning a child component cannot modify them directly.
- They help in creating reusable components by making them dynamic and flexible.
- Props are passed into a component in the form of a JavaScript object.
- They behave similarly to HTML attributes but are more powerful and dynamic.
- Through Props, we can pass various types of data, including text, numbers, arrays, objects, and functions.
- They follow a unidirectional data flow, meaning data always flows from top to bottom.
- We can use PropTypes or TypeScript for Props validation.
- Props play a crucial role in making the UI dynamic in React.

