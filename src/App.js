import './App.css';
import React,{useState} from 'react';
function App() {
  const[username, setUsername] = useState("")
  const handleInput = e =>{
    setUsername(e.target.value)
  }
  return (
   <>
   <h1>04-State and Props</h1>
   <label htmlFor='username'>Enter your name here</label>
   <input
   id="username"
   type='text'
   placeholder='my wonderful name'
   onChange={handleInput}
   />
    <p>Hi there, {username}</p>
 
   </>
  );
}

export default App;
