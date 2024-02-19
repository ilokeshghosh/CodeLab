import { useReducer, useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import ReducerHook from "./components/ReducerHook/ReducerHook.jsx";
import { UserProvider } from "./contexts/user.context.jsx";
import ReducerHook2 from "./components/ReducerHook/ReducerHook2.jsx";
import ReducerHook3 from "./components/ReducerHook/ReducerHooks3.jsx";
import ReducerHook4 from "./components/ReducerHook/ReducerHooks4.jsx";
import DataFetchingOne from './components/ReducerHook/DataFetchingOne.jsx'
import DataFetchingTwo from './components/ReducerHook/DataFetchingTwo.jsx'

const initialState = 0;
function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const countContext = createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* <UserProvider>
        <Form />
        <User />
      </UserProvider> */}

      {/* <ReducerHook /> */}

      {/* <ReducerHook2/> */}

      {/* <ReducerHook3 /> */}

      {/* <countContext.Provider value={{ count, dispatch }}>
        <ReducerHook4 />
      </countContext.Provider> */}

      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </>
  );
}

export default App;
