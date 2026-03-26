import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  // let count = 1;
  function increase() {
    if (count < 10) {
      setCount(count + 1);
    }
  } 
  function rmValue() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>React fundamental</h1>
      <h2>Basic of counts: {count}</h2>
      <button onClick={increase}>increase</button>
      <br /> <br />
      <button onClick={rmValue}>descrease</button>
    </>
  );
}

export default App;
