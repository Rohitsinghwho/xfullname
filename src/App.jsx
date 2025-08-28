import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState({
    Username:"",
    Password:""
  });
  const [CorrectInfo,setCorrectInfo]=useState(null);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name.Username&&name.Password){
      if(name.Username==="username"&&name.Password==="password"){
        setCorrectInfo(true);
      }else{
        setCorrectInfo(false);
      }
    }
    setName({Username:"",Password:""})

  }
  return (
    <div
    style={{
      display:"flex",
      gap:"20px",
        flexDirection:"column"

    }}
    >

    <h2>Login Page</h2>
      {CorrectInfo===true&&<p>Welcome, user!</p>}
      {CorrectInfo===false&&<p>Invalid username or password</p>}
    <form onSubmit={handleSubmit}>
      <div
      style={{
        display:"flex",
        gap:"5px",
      }}
      >
    
      <label htmlFor="firstName">Username:</label>
      <input 
      required 
      type="text" 
      value={name.Username} 
      onChange={(e)=>setName({...name,Username:e.target.value})}
      placeholder='username'
      />
      </div>
      <div
      style={{
        display:"flex",
        gap:"5px"
      }}
      >
      <label htmlFor="lastName">Password:</label>
      <input placeholder='password' required type="text" value={name.Password} onChange={(e)=>setName({...name,Password:e.target.value})}/>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App