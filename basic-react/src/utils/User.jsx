function User({ data }) {
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          paddingLeft: "10px",
          margin: "10px",
          width: "300px",
          borderRadius: "10px",
          backgroundColor:"lightblue"
        }}
      >
        <h3>
          Name:<span style={{ color: "green" }}>{data.name}</span>
        </h3>
        <h3>
          Age:<span style={{ color: "red" }}>{data.age}</span>
        </h3>
        <h3>
          Email:<span style={{ color: "red" }}>{data.email}</span>
        </h3>
      </div>
    </>
  );
}
export default User;
