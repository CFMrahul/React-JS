import { useState } from "react";

function Card() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #dddd",
    width: "200px",
    boxShadow: "5px 5px 3px 0px #dddd",
    margin: "10px",
    borderRadius: "10px",
  });
  return (
    <>
      <h1 style={{ color: "gray" }}>Profile Card</h1>
      <button
        style={{ backgroundColor: "gray", borderRadius: "5px", margin: "10px",color:"white" }}
      >
        Light
      </button>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          backgroundColor:"black"
        }}
      >
        Dark
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "25px" }}
            src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-young-service-men-avatar-free-vector-png-image_1535598.jpg"
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Amavas</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "25px" }}
            src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-young-service-men-avatar-free-vector-png-image_1535598.jpg"
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Amavas</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "25px" }}
            src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-young-service-men-avatar-free-vector-png-image_1535598.jpg"
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Amavas</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "25px" }}
            src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-young-service-men-avatar-free-vector-png-image_1535598.jpg"
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Amavas</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "25px" }}
            src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-young-service-men-avatar-free-vector-png-image_1535598.jpg"
            alt=""
          />
          <div style={{ padding: "5px" }}>
            <h3>Amavas</h3>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
