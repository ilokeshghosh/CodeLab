import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function ReducerHook2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count1 = {count.firstCounter}</h2>
      <h2>count2 = {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement 1
      </button>

      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
