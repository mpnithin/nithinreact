import { useState, useEffect, useRef } from "react";

function Appuseref() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>  
       ); 
    }
export default Appuseref;
