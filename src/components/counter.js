import React, { useState, useEffect } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setCount(count + 1);

      // console.log("TIKK");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  document.title = `You clicked ${count} times`;

  return (
    <div>
      <p className="output">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Remove Clicks</button>
    </div>
  );
}
