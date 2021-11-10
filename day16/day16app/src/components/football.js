import React from 'react';
function Football()
{
    const shoot=()=>
    {
        alert('great shot!');
    }
    return(<button onClick={shoot}>take the shoot</button>)
}

export default Football;