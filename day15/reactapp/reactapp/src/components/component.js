//import React from "react";


function Greeting(probs)
{
    return <h1>name:{probs.name},roll no is:{probs.rollno}</h1>; 
}


function Getgreet()
{
    return(<div>
        <Greeting name="nithin" rollno="11"/>
        <Greeting name="anas" rollno="22"/>
        <Greeting name="daya" rollno="10"/>
        <Greeting name="meenu" rollno="5"/>
        </div>
    );
}




export default Getgreet;

