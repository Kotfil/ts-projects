import React from 'react';
import './App.css';
import Tests, {splitIntoWords} from "./Tests";



const sentense = 'Hello my friends!';
const result = splitIntoWords(sentense)
console.log(result)

function App() {
  return (
    <div className="App">
    <Tests />
    </div>
  );
}

export default App;
