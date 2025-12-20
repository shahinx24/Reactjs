import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")
  const [error,setError] = useState("")
  const [users,setusers] = useState([])

  useEffect(()=>{
      if (email === "" && username === "") {
        setError("");
        return;
      }else if(email.trim() === "" || username.trim() === ""){
       setError("All fields are required");
      }else if (!email.includes("@")) {
       setError("Email must contain @");
      }else {
       setError("")
      }
  },[username,email])

  function handler(){
    if (error) return;
      const newUser = { username, email };
      console.log("Button clicked", error);

    // Save to JSON Server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        setusers(prev => [...prev, data]);
        setUsername("");
        setEmail("");
      });
    }

    useEffect(() => {
      fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setusers(data));
    }, []);
  
  return (
    <>
    <input value={username}
      placeholder='enter your username'
      onChange={(item)=> setUsername(item.target.value)}/>
    <br></br>
    <input value={email}
      placeholder='enter your Email'
      onChange={(item)=> setEmail(item.target.value)}/>
    <br></br>
    <p>{error}</p>
    <button onClick={handler}>Click</button>
    
     <h3>Stored Users</h3>
      {users.map(user => (
        <p key={user.id}>
          {user.username} - {user.email}
        </p>
      ))}
    </>
  )
}

export default App