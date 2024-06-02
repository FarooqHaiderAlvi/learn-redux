import React, { useContext } from "react";
import counterContext from "./ContextHook1";
export default function ContextHook3() {
  const context = useContext(counterContext);
  const { count, increment } = context;
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Add</button>
    </>
  );
}
