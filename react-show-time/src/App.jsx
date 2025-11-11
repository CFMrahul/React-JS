// import "./App.css";
import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>Time Component</h1>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"yellow"}>Yellow</option>
        <option value={"blue"}>Blue</option>
      </select>
      <Clock color = {color}/>
    </>
  );
}
export default App;
