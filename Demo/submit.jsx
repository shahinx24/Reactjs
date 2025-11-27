import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name is required");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {error && <p style={{color: "red"}}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
