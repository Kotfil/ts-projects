import React, {useEffect, useState} from "react"

export default {
    title: 'useEffect.memo demo'
}


export const SimplePromo = () => {
    const [fake, setFake] = useState(1);
    const [count, setCount] = useState(1);
    console.log('SimplePromo')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = count.toString();
    },)

    useEffect(() => {
        console.log('useEffect only first render (ComponentDidMount)')
        document.title = count.toString();
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
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
