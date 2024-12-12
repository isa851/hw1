import { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

function App() {
 const [count, setCount] = useState(0);
 
 const countIncrement = () => {
  if(count <  15) setCount(prewCount => prewCount + 5)
 }  

 const contDecrement = () => {
 if(count > 0) setCount(prewCount => prewCount - 5)
}  

  return (
    <div className="App">
      <h2>{count}</h2>
      <Increment countIncrement={countIncrement}/>
      <Decrement contDecrement={contDecrement}/>
    </div>
  );
}

export default App;
