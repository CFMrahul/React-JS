import "./App.css";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Card title={"Featured"} show={"Learn More"} />
      <Card title={"advantages"} show={"Visit Me!"} />
    </>
  );
}