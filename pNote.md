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


