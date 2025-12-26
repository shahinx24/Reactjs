import { useContext } from "react";
import { CounterContext } from "./App.jsx";

function CounterButtons() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default CounterButtons;