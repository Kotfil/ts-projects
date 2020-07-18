import React from "react";


export function sum(a:number,b:number) {
    return a + b;
}
export function mult(a:number,b: number) {
    return a * b;
}


export function splitIntoWords(sentense: string) {
    return ['hello','my','friend']
}

const tasks = [
    {id: 1,title: 'bread', isDone: true},
    {id: 2,title: 'milk', isDone: false},
    {id: 3,title: 'sugar', isDone: true},
    {id: 4,title: 'chips', isDone: false}
]

const completedTask = tasks.filter(task => task.isDone === true)

console.log(completedTask)



const Tests = () => {
    return(
      <div>
12321
      </div>
    );
}

export default Tests;