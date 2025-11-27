import { useState } from "react";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  };

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <h1>Theme Switcher</h1>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}
export default App;