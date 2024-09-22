import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) {
      setCounter(20); 
      console.log("Maximum limit reached");
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(0); // Ensure the counter doesn't go below 0
      console.log("Minimum limit reached");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
