import react, { useState } from "react";
import { Display, Button, Card } from "./Display";


function Home()
{
     const[cnt,setCnt]= useState(0);
    const cnt1 =()=>
    {
        setCnt(cnt+1);
    }
    console.log(cnt);
    return(
        <>
        {/* <h1>this is my function based component</h1> */}
        {/* <button onClick={cnt1}>{cnt}</button> */}
        <Display cnt1 = {cnt} />
        <Button counterfun = {cnt1}/>
        <Card/>
        </>
    );
}
export default Home;