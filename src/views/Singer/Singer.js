
import React, { useState, useEffect } from 'react';
 
function HooksDemo (props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
  });
 
  return (
    <div>
      <p>You clicked singer {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default HooksDemo;