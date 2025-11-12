import { useState } from "react"
import AddUser from "./utils/AddUser"
import DisplayUser from "./utils/DisplayUser"



function App() {
  const [user, setUser] = useState('')
  return (
    <> 
     <AddUser setUser = {setUser}/>
     <DisplayUser user={user}/>
    </>
  )
}

export default App
