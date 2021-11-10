import React from "react";
import './run.css';

const Runsmade=(props)=>{
    const r=props.r;
    
    return <h1 className="h22">{r} RUNS</h1>
    
}
const Noruns=()=>{
    return <h1 className="h11">No runs scored..</h1>
}
const Runs=(props)=>{
    //const isrun=props.isrun;
const i=props.i;
    if(i>0)
    {
            return <Runsmade r={i}/>;  
    }
    else{
        return <Noruns/>;

    }  
}
export default Runs;