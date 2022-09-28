import React, { useEffect, useState } from "react";

export default function Add(){

       const[x,setx]=useState(true);

       //useEffect(()=>{
        //setx=x+3;
       //},[])
       const mul=()=>{
        setx(x*3);
        console.log(setx);
       }

    return(
        <div>
            <h1>flfjlkd</h1>
        {x}<br/>
        <button onClick={()=>setx(x+3)}>add</button>
        <button onClick={()=>setx(x-3)}>delete</button>
        <button onClick={()=>mul()}>mul</button>
        </div>
    );
}