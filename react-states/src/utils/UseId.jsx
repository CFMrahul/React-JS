import { useId } from "react";
function UseId() {
    return (
        <>
        <UseInfo/>
        </>
    )
}
export default UseId;

function UseInfo() {

    let name = useId();
    let password = useId();
    let email = useId();
    let address = useId();

    return (
        <>
        <h1>React in UseId State</h1>
        <label htmlFor={name}>Name :</label>
        <input id={name} type="text" placeholder="enter name" />
        <br /><br />
        <label htmlFor={password}>Password :</label>
        <input type="password" id={password} placeholder="enter password" />
        </>
    )
}