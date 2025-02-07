import React, { useEffect, useState } from "react";
import CardList from "./CardList";

import Search from "./search";
function App()
{
    // const profile = S;
    const[profile,setProfile] = useState([]);

    const[cnt,setCnt] = useState(0);
    console.log(profile);

    
     
    useEffect(()=>
    {
        fetch('http://localhost:3001/test-data.json')
        .then(res=>res.json())
        .then(data=>setProfile(data));
    },[cnt]);
    


    const onSearch1 = (username) =>{
        console.log(username);
        const user = [].filter((profile)=>
        {
            return profile.login.includes(username);
        });
        setProfile(user);
    }
    return (
        <>
        <h1>CardList</h1>
        <Search onSearch={onSearch1}/>
        <CardList  profiles={profile} />
        <button onClick={()=>setCnt(cnt+1)}>{cnt}</button>
</>
    );
}
export default App;