import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react";

 export default function Hookmouse(){

    const[x,setx]=useState(0);
    const[y,sety]=useState(0);

     
       const click=e =>{
           console.log('second');
           setx(e.clientX)
           sety(e.clientY)
       }

    useEffect(()=>{
        console.log('first called');
        window.addEventListener('mousemove', click);
    },[]
    )
    return(
        <div>
          Hooks  X -  {x}   Y -  {y}
        </div>
    );

}