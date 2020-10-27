import React, {useMemo, useState} from "react"

export default {
    title: 'UseState demo'
}

function genData() {
    console.log('gendata')
    return 23131231123;

}


export const Example1 = () => {
    console.log('Exaplme1')
   // const setVal = useMemo(genData,[])
    const [count, setCount] = useState(genData); //[0, func(newValue)]
const onValue = (state:number) => {
    return state + 1
}
    return <>
        <button onClick={() => {setCount(count + 1)}}>+</button>
        {count}
    </>
};

