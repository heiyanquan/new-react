
import React, { useState } from 'react';
import HooksDemo from './HooksDemo'
 
function HooksTest (props) {
  console.log(111)
  console.log(props)
  const [age, setAge] = useState(42);
  
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  const handleClick = (params) => {
    setAge(age + 3);
  }

  return (
    <div>
      <p>You clicked times fsd</p>
      <button onClick={() => handleClick({ aaa: 111 })}>changeAge</button>
      {HooksDemo({ age, ddd: 444 })}
    </div>
  );
}

export default HooksTest;