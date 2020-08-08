import React from 'react';
import './App.css';
import Tests, {splitIntoWords} from "./Tests";



const arr1: Array<number> = [1,2,3,4,5];

function App() {

  return (
    <div className="App">
    <Tests />
    </div>
  );
}

export default App;
