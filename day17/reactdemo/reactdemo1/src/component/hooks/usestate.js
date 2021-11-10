import { useState } from "react";
//import ReactDOM from "react-dom";

function Car() {
  const [brand,setBrand] =useState("Honda");
  const[model,setModel]=useState("2021");
  const[usage,setUsage]=useState("passengers");
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My Car is {brand} , model is {model} , for {usage} and color is {color}!</h1>
      <button
        type="button"
        onClick={()=>{setBrand("BMW");setModel("2022");setColor("blue");setUsage("SUV")}}
      >change</button>
      
    </>
  )}     
export default Car;
