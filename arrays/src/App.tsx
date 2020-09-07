import React from 'react';
import './App.css';
import Tests, {splitIntoWords} from "./Tests";
import Lesson4 from "./Lesson4";



const arr1: Array<number> = [1,2,3,4,5];

function App() {

  return (
    <div className="App">
    <Tests />
    <Lesson4 />
    </div>
  );
}

export default App;
