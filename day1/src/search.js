import React, { useState} from "react";

function Search(props)
{
// const username = useRef('abcd');
const[username,setUsername] = useState('');
const submitHandler = (event)=>
{
    event.preventDefault();
    props.onSearch(username);
    // console.log(username.current.value);
}
const onChangeHandler = (username)=>
{
    setUsername(username.target.value);
    console.log(username.target.value);
}
return(
    <>
    <form onSubmit={submitHandler}>
        <input type="text"
        //  ref={username} 
        value={username}
        onChange={onChangeHandler}
         />
        
        <button>search</button>
    </form>
    </>
);
}
export default Search;