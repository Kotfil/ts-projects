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
// function digitize(n) {
//      return n.toString().split('').reverse().map(x=>+x)
// }
// console.log(digitize(345678))
//  var array = [];
//     for (var i = 0; i <= 20; i++) {
//         array.push(Math.random().toFixed(12))
//     }
//     console.log(array);
// var array1 = [1,222,33,41,56,2];
// var array = [];
// for (var i = 0; i < array1.length; i++) {
//     if(array1[i] > 0 && array1[i] < 10) {
//         console.log(array1[i])
//     }
//     var arr = ['ss','WWW','fwf','ww','WWEDF'];
// //    let ff = arr.filter(t =>  t.toUpperCase() === t)
// // console.log(ff)
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for(var i = 0;i < arr.length;i++) {
//         if (arr[i] == 5) {
//              console.log(arr[i])
//         }
//     }





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


