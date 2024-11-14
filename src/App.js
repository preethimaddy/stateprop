import './App.css';
import React,{useState} from 'react';
import ChangeName from './ChangeName';
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
    <p>Hi there,</p>
      <p> {username} You are doing great</p>
 <ChangeName username={username} setUsername ={setUsername}/>
   </>
  );
}

export default App;
