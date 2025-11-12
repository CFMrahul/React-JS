

function AddUser({setUser}) {
  
    return (
        <>
        <h1>React Lifting State </h1>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add user" />
        <hr />
        </>
    )
}

export default AddUser;