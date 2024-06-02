import React, { useState } from "react";
import counterContext from "./ContextHook1";

export default function ContextHook2({ children }) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <counterContext.Provider value={{ count, increment }}>
        {children}
      </counterContext.Provider>
    </>
  );
}
