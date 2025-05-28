

import { useState } from 'react';

export default function Counter() {
  // the count value lives and is managed up here!
  const [count, setCount] = useState(0);  


  function incrementCount(){
    setCount(count + 1);
  }
  function decrementCount(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }
  

  return (
    <div>
      <h3>Count</h3>
      <button onClick={incrementCount}> +  </button>
      <span>{count}</span> {/* use curly braces to output the count value: 0 */}
      <button onClick={decrementCount}>-</button>

<button onClick = {reset}> Reset </button>

      </div>
  );
}


