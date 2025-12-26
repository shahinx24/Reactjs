import { createContext, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

export const CounterContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <h1>Simple Counter with useContext</h1>
      <CounterDisplay />
      <CounterButtons />
    </CounterContext.Provider>
  );
}

export default App;