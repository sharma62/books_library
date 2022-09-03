import React, { useState } from 'react';
 
const DigitalClock = ()=>{
    let time = new Date().toLocaleTimeString();
    const[cTime,setTime] = useState(time);
  
    setTimeout(() => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    }, 1000);
 
    return (
        <>
            <h1 className='h2 text-center py-4'>{cTime}</h1>
        </>
    );
}
export default DigitalClock;