import React, { useEffect, useState } from 'react'

const App = () => {
  const [seconds,setSeconds]=useState(0);
  const [isRunning,setIsRunning]=useState(false);

  useEffect(()=>{
    let timer;
    if(isRunning){
      timer=setInterval(() => {
        setSeconds((prev)=>prev+1);
      }, 1000);
    }
    return ()=>clearInterval(timer);
  },[isRunning])

  const hanldeStartStop=()=>{
    setIsRunning((prev)=>!prev);
  }

  const handleReset=()=>{
    setIsRunning(false);
    setSeconds(0);
  }

  const formatTime=(totalSeconds)=>{
    const minutes=Math.floor(totalSeconds/60);
    const secs=totalSeconds%60;
    return `${minutes}:${secs.toString().padStart(2,"0")}`
  }
  return (
    <div
    style={{
      display:"flex",
      flexDirection:"column",
      gap:"15px",
      alignItems:"center",
      marginTop:"50px"
    }}
    >

      <h2>Stopwatch</h2>
      <div style={{fontSize:"20px"}}>
        <strong>Time: </strong>
        {formatTime(seconds)}
      </div>
      <div style={{display:"flex",gap:"10px"}}>
        <button onClick={hanldeStartStop}>
          {isRunning?"Stop":"Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App