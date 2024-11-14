import React from 'react'



const ChangeName = ({username,setUsername}) => {
    const handlepropChange =e=>{
    setUsername("There")
    }
  return (
    <>
     <button className='' onClick={handlepropChange}>Hide my Name</button>
     <p>{username},what is the plan for tonight?</p></>
   
  )
}

export default ChangeName