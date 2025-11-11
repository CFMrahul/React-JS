import styled from "styled-components";

function StyleCompenent(){
    // const Heading = styled.h1`
    // color:red;
    // border:1px solid green;
    // border-radius:10px;
    // padding:10px 0px 10px 15px;
    // width:auto;
    // `

    const Heading = styled.h1({
        color:"blue",
        border:"1px solid green",
        borderRadius:"10px",
        padding:"10px 0px 10px 15px"
    })
    
    return(
        <>
        <h1>React Style component</h1>
        <Heading>Hello World!</Heading>
        <Heading>Technology Power</Heading>
        <Heading>Web Delevopment</Heading>
        <Heading>Last Night</Heading>
        <Heading>Class Of The Titne</Heading>
        </>
    )
}
export default StyleCompenent;

