import { useReducer } from "react";
import { initialState } from "./reducer";


function Component() {

  const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>useReducer Hook</h2>
    </div>
  );
}
export default Component;
