import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./utils/Home";
import About from "./utils/About";
import Contacts from "./utils/Contacts";
import NavBar from "./utils/NavBar";
import Error from "./utils/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
