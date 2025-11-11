import { useState } from "react";

function Profile() {
  const [cardStyle, setCardStyle] = useState({
    width: "200px",
    border: "1px solid #cccccc",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });
  return (
    <>
      <h1>Style in react</h1>
      <div style={{ display: "flex", backgroundColor: "#faf4f4ff" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.istockphoto.com/id/587805038/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=soUW134LXdq5F9LcRtniX--ZOPNQqTdhQJrewQiZsf4="
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Rahul Kumar</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.istockphoto.com/id/587805038/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=soUW134LXdq5F9LcRtniX--ZOPNQqTdhQJrewQiZsf4="
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Rahul Kumar</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.istockphoto.com/id/587805038/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=soUW134LXdq5F9LcRtniX--ZOPNQqTdhQJrewQiZsf4="
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Rahul Kumar</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.istockphoto.com/id/587805038/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=soUW134LXdq5F9LcRtniX--ZOPNQqTdhQJrewQiZsf4="
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Rahul Kumar</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://media.istockphoto.com/id/587805038/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=soUW134LXdq5F9LcRtniX--ZOPNQqTdhQJrewQiZsf4="
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Rahul Kumar</h3>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
