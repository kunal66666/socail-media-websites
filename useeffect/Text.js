import React from "react";
import { useEffect,useState } from "react";

const Text =()=>{
    const [text,setText]= useState("");

    useEffect(()=>{
        console.log("component based")
        return()=>{
            console.log("unmounted")
        }
    },[])
    //[] after putting this it will  
    return (
        <div>
            <input
                onChange={(event)=>
                {
                    setText(event.target.value);
                }}
            />
            <h1>{text}</h1>
        </div>
    )
}
export default Text