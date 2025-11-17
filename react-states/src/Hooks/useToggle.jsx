import { useState } from "react";

function useToggle(defaultVal) {
  const [value, setValue] = useState(defaultVal);
  const toggleValue = (val) => {
    console.log(val);
    if (typeof val != "boolean") {
      setValue(!value);
      console.log("if");
    } else {
        console.log("else");
      setValue(val);
    }
  };
  return [value,toggleValue];
}
export default useToggle;
