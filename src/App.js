import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestComponent } from "./TestComponent";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setCount2((count) => count + 1);
        }}
      >
        {count2}
      </button>

      <p>
        <TestComponent
          onChange={(c) => {
            console.log("On change 1")
            setCount(c);
          }}
          count={count}
        />
      </p>

      <p>
        <TestComponent
          onChange={(c) => {
            console.log("On change 2", c)
            setCount2(c);
          }}
          count={count2}
        />
      </p>
    </>
  );
}

export default App;
