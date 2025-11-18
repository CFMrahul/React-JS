import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
    const subject = useContext(SubjectContext);
  return (
    <>
      <div style={{ backgroundColor: "red", padding: "20px " }}>
        <h1>Subject: {subject}</h1>
      </div>
    </>
  );
}
export default Subject;
