import { useContext } from "react";
import { CounterContext } from "./App.jsx";

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return <p>Current count: {count}</p>;
}

export default CounterDisplay;