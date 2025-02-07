import React  from "react";

function Display (props)
{
    return (
        <span>{props.cnt1}</span>
    );
}
function Button(props)
{
    return(
        <button onClick={props.counterfun}>Like</button>
    );
}
function Card()
{
    return(
        <>

<div className="card" style={{width:400}}>
  <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
        </>

    );
}
export {Display,Button,Card};