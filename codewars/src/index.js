import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

//1. Delete space in string
// let fil = 'dddd 111 sss';
//
// let result1 = fil.split('').filter(e => e.trim().length).join('');

//console.log(result)

//2. Abbreviate a Two Word Name

// const abbrevName = name =>
//      name.split(' ').map(name => name[0].toUpperCase()).join('.')
//
// console.log(abbrevName('Filipp Kotenko'))
//
//3.
// const stringToArray = (string) => {
// //     return string.split(/[ ,]+/)
// // }

// console.log(stringToArray('Fil hello'))
//4.
// function repeatStr (n, s) {
// //     return s.repeat(n);
// // }

//console.log(repeatStr(3,'hello'));
//5.
function digitize(n) {
     return n.toString().split('').reverse().map(x=>+x)
}
console.log(digitize(345678))

function App() {
    return (
        <div className="App">

        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


