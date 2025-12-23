import { useState,useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")
  const [error,setError] = useState("")
  const [users,setUsers] = useState([])

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

async function handler() {
  if (error) return;
  const newUser = {username,email};
  try {
    const res = await axios.post(
      "http://localhost:5000/users",
      newUser
    );
    setUsers((prev) => [...prev, res.data]);
    setUsername("");
    setEmail("");
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then((res) => {
        setUsers(res.data);
      })
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