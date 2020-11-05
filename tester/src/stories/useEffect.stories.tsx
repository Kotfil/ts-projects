import React, {useEffect, useState} from "react"
import {formatWithOptions} from "util";
import {scryRenderedDOMComponentsWithClass} from "react-dom/test-utils";

export default {
    title: 'useEffect.memo demo'
}


export const SimplePromo = () => {
    const [fake, setFake] = useState(1);
    const [count, setCount] = useState(1);

    useEffect(() => {
        document.title = count.toString();
    },)

    useEffect(() => {
        document.title = count.toString();
    }, [])

    useEffect(() => {
        document.title = count.toString();
    }, [count])

    return <>
        Hello {count} {fake}
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake
        </button>
        <button onClick={() => {
            setCount(count + 1)
        }}>count
        </button>
    </>
};

export const SetTimeoutExample = () => {
    console.log('SimplePromo')
    const [dateY , setYear] = useState();
    const [dateH , setHour] = useState();
    const [dateM , setMin] = useState();
    const [dateS , setSec] = useState();


    const getYear = () =>  setYear(new Date().getFullYear())
    const getMin= () =>  setMin(new Date().getMinutes())
    const getHour = () =>  setHour(new Date().getHours())
    const getSec = () =>  setSec(new Date().getSeconds())

    // useEffect(() => {
    //     console.log('useEffect every render')
    //     document.title = count.toString();
    // }, )
    let a = new Date().getSeconds()

    useEffect(() => {
        setInterval(() => {
            getYear();
            getMin();
            getHour();
            getSec();
        },1000)
    },[])


    return <>
        {`${dateY}:${dateH}:${dateM}:${dateS}`}

    </>
};

export const ResetTimeExample = () => {
    const[count,setCount] = useState(1)
    console.log('Component rendered with ' + count)

    console.log('settimeoutExample')

useEffect(()=> {
    console.log('Effect occurred ' + count)
    return () => {
        console.log('Reset effect ' + count)
    }

},[count])

const increasse = () => {setCount(count +1)}


return <>
    Hello,counter: {count} <button onClick={increasse}>+</button>
</>
}

export const KeysTrackerExample = () => {
    const[text,setText] = useState()
    console.log('Component rendered with ' + text)

    useEffect(()=> {

        window.document.addEventListener('keypress', (e) => {
            console.log(e.code);
            setText(text  + e.code)
        })

    },[])



    return <>
        Typed text: {text}
    </>
}