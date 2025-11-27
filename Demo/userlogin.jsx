import { useRef, useState } from 'react';
import React from 'react';
import "./App.css";

function Greet({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>;
}

function App() {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    const value = inputRef.current.value.trim();

    setName(value);

    if (value === "") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <Greet name={name} />
      <Greeting isLoggedIn={isLoggedIn} />

      <p>Enter your Name:</p>
      <input ref={inputRef} placeholder="Name.." /><br /><br />

      <button onClick={handleClick}>
        Login
      </button>
    </div>
  );
}

export default App;

/*1️⃣ isLoggedIn is a state
Because you want UI to update when the user logs in or logs out.

const [isLoggedIn, setIsLoggedIn] = useState(false);

2️⃣ When button is clicked:
const value = inputRef.current.value.trim();

Reads input

Removes extra spaces

Then:

setName(value);

3️⃣ Check login condition
if (value === "") {
  setIsLoggedIn(false);  // empty input → not logged in
} else {
  setIsLoggedIn(true);   // entered something → logged in
}
4️⃣ Pass the boolean to Greeting
<Greeting isLoggedIn={isLoggedIn} />} */