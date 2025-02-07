import React from "react";
import Card from "./Card";

function CardList({profiles})
{
   
    return(
        <>

        <h1>GithubCard</h1>
        {/* <Card p = {profile[0]} />
        <Card p = {profile[1]} />
        <Card p = {profile[2]} />
        <Card p = {profile[3]} />
        <Card {...profile[0]} />
        <Card {...profile[1]} />
        <Card {...profile[2]} />
        <Card {...profile[3]} /> */}

        {
            
            profiles.map((p,id)=>
            {
                return <Card {...p} key={id} />
            })
        }
        </>

    );
}
export default CardList;