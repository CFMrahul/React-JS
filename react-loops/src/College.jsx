import Student from "./Student";

function College({ college }) {
  console.log(college);
  return (
    <>
      <div
        style={{
          backgroundColor: "#ccc",
          borderBottom: "2px solid black",
          borderRadius: "20px",
          width: "500px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <h2>Name: {college.college}</h2>
        <ul>
          <li>
            <h3>City: {college.city}</h3>
          </li>
          <li>
            <h3>website: {college.website}</h3>
          </li>
          <li>
            <h3>students</h3>
           <Student student = {college.students}/>
          </li>
        </ul>
      </div>
    </>
  );
}
export default College;
