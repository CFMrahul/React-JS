import "index.css"
import { useState } from "react"
import AddUser from "./utils/AddUser"
import DisplayUser from "./utils/DisplayUser"
import UpObject from "./utils/UpObject"
import UpArray from "./utils/UpArray"



function App() {
  // const [user, setUser] = useState('')
  return (
    <> 
     {/* <AddUser setUser = {setUser}/>
     <DisplayUser user={user}/> */}

     {/* <UpObject/> */}

     <UpArray/>
    </>
  )
}

export default App
