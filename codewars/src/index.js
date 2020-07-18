import React from 'react';
import ReactDOM from 'react-dom';

//1. Delete space in string
let fil = 'dddd 111 sss';

let result = fil.split('').filter(e => e.trim().length).join('');

console.log(result)


function App() {
    return (
        <div className="App">

        </div>
    );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


