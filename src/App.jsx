import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p>Count is: {count}</p>
      <div className="card">         
        <button onClick={() => setCount((count) => count = count -1 )} className='drecreaseButton'>Decrease -1</button>{' '}
        <button onClick={() => setCount((count) => count + 1)} className='increaseButton'>Increase +1</button>{' '}
        <button onClick={() => setCount((count) => count = 0)} className='clearButton'>Clear</button>
      </div>
    </>
  );
}

export default App;
