import { useState } from "react";

function UpArray() {
  const [data, setData] = useState(["Raja", "Rani", "Mohini", "Brahma"]);

//   Array in object
const [obj, setObj] = useState([
    {name:"Rana", age:"22"},
    {name:"Ranali", age:"18"},
    {name:"Rana ji", age:"42"},
    {name:"Aman", age:"34"},
    {name:"Rishab", age:"24"},
    {name:"Sujeet", age:"23"},
])

//   Updating Array
  const handleUser = (name) => {
    data[data.length-1] = name;
    setData([... data])
  }
//   Object in array
const handleObject = (name) => {
    obj[obj.length-1].age = name;
    console.log(obj);
    setObj([... obj])
}
  return (
    <>
      <h1>Updating Array in states</h1>
      <input type="text" placeholder="Enter name" onChange={(e)=>handleUser(e.target.value)} />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <hr />
      {/* Object in array */}
      <input type="text" placeholder="enter name" onChange={(e)=>handleObject(e.target.value)} />
      {
        obj.map((item, index) => (
            <h4 key={index}>{item.name}, {item.age}</h4>
            
        ))
      }
    </>
  ); 
}

export default UpArray;
