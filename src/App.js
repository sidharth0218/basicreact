import { useState } from 'react';
import './App.css';
import Test from './Test';


function App() {
  const username="punjabi boyz name bharat";
  let [counter,setUpdate] = useState(10);
  // let  counter=15;
  let addValue= () => {
    console.log("Clicked",counter);
    counter=counter+1;
    if(counter > 20)
    {
      counter=0;
    }
    setUpdate(counter);
  }
  let subValue= () => {
    console.log("Clicked",counter);
    counter=counter-1;
    if(counter <0)
    {
      counter=0;
    }
    setUpdate(counter);
  }
  return (
    <div className="App">
    <Test />
      <h1>Jatt {username} React project </h1>
      <h2>Sidharth kashyap </h2>
      <h3>Counter {counter}</h3>
      <button onClick={addValue}>Add Counter </button>
      <button onClick={subValue}>Minus Counter </button>
    </div>
    
  );
}

export default App;
