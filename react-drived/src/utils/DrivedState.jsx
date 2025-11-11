import { useState } from "react";

function DrivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const handleAddUsers = () => {
    setUsers([...users, user]);
  };
//   Drived State
const total = users.length;
const last = users[users.length-1];
const unique = [...new Set(users)].length;
  return (
    <>
      <h1>React drivedState</h1>
      <h2>Total User: {total}</h2>
      <h2>Last User: {last}</h2>
      <h2>Unique Total User: {unique}</h2>
      <input
        type="text"
        placeholder="enter new user"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleAddUsers}>Click</button>
      {
        users.map((item, index)=> (
            <h4 key={index}>{item}</h4>
        ))
      }
    </>
  );
}
export default DrivedState;
