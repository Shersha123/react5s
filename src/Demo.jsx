import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Demo() {
  useEffect(() => {
    console.log("Hello");
    fetch("https://6300f2429a1035c7f8fb32ef.mockapi.io/users/users").then(
      () => {
        console.log("Fetch");
      }
    );
  }, []);

  useEffect (() => {
return () => {
  console.log("destroy")
}
 }, [] );

  const [timer, setTimer] = useState(0);

  useEffect (() => {
console.log("timerUpdate")
  },[timer])
  return (
    <div>
      <button onClick={() => setTimer(timer + 1)}>+</button>
      {timer}
      <button onClick={() => setTimer(timer - 1)}>-</button>
    </div>
  );
}

export default Demo;