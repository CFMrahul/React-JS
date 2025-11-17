import useToggle from "./useToggle";
function Hook () {
    const [value, toggleValue] = useToggle(true);

    return (
        <>
        <button onClick={toggleValue}>Toggle heading</button>
        <button onClick={()=>toggleValue(false)}>Hide heading</button>
        <button onClick={()=>toggleValue(true)}>Show heading</button>
        {
            value? <h1>Custome Hooks in React js</h1>:null
        }
        </>
    )
}
export default Hook;