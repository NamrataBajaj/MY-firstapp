import React from 'react'
import { useState , useEffect } from 'react';
const Hooks = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("my data");
    console.log("abc");
    const increaseCount = () => {
      setCount(count + 1);
    };
    const changeData = () => {
      setData("updated data");
    };
    useEffect(() => {
      console.log("component did mount");
    }, [count, data]);
  
  return (

   
  
    <>
       <h1>This is Heading</h1>
      <button onClick={increaseCount}>{count}</button>

      <br></br>
      <br></br>
      <button onClick={changeData}>{data}</button> 
    </>
  )
}

export default Hooks