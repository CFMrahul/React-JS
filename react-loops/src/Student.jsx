function Student({student}) {
    return (
        <>
        <div>
             {student.map((student) => (
              <ul
                style={{
                  borderBottom: "2px solid black",
                  borderRadius: "10px",
                  backgroundColor: "lightgrey",
                  margin: "5px",
                  width: "300px",
                }}
              >
                <li>Name: {student.name}</li>
                <li>Age: {student.age}</li>
                <li>Email: {student.email}</li>
              </ul>
            ))} 
        </div>
        </>
    )
}

export default Student;