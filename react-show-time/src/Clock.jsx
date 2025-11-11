import { useEffect, useState } from "react";

const Clock = ({color}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1
        style={{
          backgroundColor: "black",
          color: color,
          width: "130px",
          paddingLeft: "13px",
          paddingTop: "15px",
          height: "50px",
          borderRadius:"15px"
        }}
      >
        {time}
      </h1>
    </>
  );
};

export default Clock;
