import { useState } from "react";

function Test() {
  const [color, setColor] = useState("olive");
  const colors = ["red", "green", "blue", "orange", "aqua", "black", "pink"];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((clr, index) => (
            <button
              key={index}
              className="outline-none px-4 rounded-3xl text-white"
              onClick={() => setColor(clr)}
              style={{ backgroundColor: clr }}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
