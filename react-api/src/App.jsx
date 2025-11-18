import { useState } from "react";
import Collage from "./utils/Collage";
import { SubjectContext } from "./utils/ContextData";
function App() {
  const [subject, setSubject] = useState("History");
  return ( 
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <SubjectContext.Provider value={subject}>
        <select onChange={(event)=>setSubject(event.target.value)}>
          <option value="Mathematics">Mathematics</option>
          <option value="Hindi">Hindi</option>
          <option value="Bio">Bio</option>
          <option value="Chemistry">Chemistry</option>
        </select>
        <h1>Context Api</h1>
        <button onClick={()=>setSubject('')}>Reset</button>
        <Collage />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
