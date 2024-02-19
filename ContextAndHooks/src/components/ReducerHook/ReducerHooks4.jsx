import { useContext } from "react";
import { countContext } from "../../App";

export default function ReducerHoo4() {
  const { count, dispatch } = useContext(countContext);
  return (
    <div>
      <h2>count = {count}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}
