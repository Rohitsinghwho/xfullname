import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState({
    firstName:"",
    lastName:""
  });
  const [showName,setShowName]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    setShowName(!showName)
  }
  return (
    <div
    style={{
      display:"flex",
      gap:"20px",
        flexDirection:"column"

    }}
    >
    <h2>Full Name Display</h2>
    <form onSubmit={handleSubmit}>
      <div
      style={{
        display:"flex",
        gap:"5px",
      }}
      >
      <label htmlFor="firstName">First Name:</label>
      <input required type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
      </div>
      <div
      style={{
        display:"flex",
        gap:"5px"
      }}
      >
      <label htmlFor="lastName">Last Name:</label>
      <input required type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/>
      </div>
      <button>Submit</button>
    </form>

    {
      showName&&
      <span>Full Name: {name.firstName} {name.lastName}</span>
    }

    </div>
  )
}

export default App