import { useEffect, useState } from "react";
import "./index.css"
function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const url = "https://dummyjson.com/users";
    let responce = await fetch(url);
    responce = await responce.json();
    setUserData(responce.users);
  };
  console.log(userData);
  return (
    <>
      <h1>CRUD operation in react js</h1>
      <ul className="data-Table user-table-header">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>
      {
        userData && userData.map((user)=>(
          <ul className="data-Table">
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age }</li>
          </ul>
        ))
      }
    </>
  );
}

export default App;
