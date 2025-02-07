import React from "react";

function Card(props)
{
    const pr = props;
    // const profile = SData[0];
    return (
        <div>
           <h2>{pr.login}</h2>
           <h2>{pr.id}</h2>
           <img src={pr.avatar_url} />
           <h2><a href="html_url">links</a></h2>
        </div>
    );
}
export default Card;