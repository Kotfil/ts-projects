// import React, {useEffect, useState} from 'react';
//
// export default {
//     title: 'useEffect.memo demo'
// }
//
//
// export const SimplePromo = () => {
//     const [fake, setFake] = useState(1);
//     const [count, setCount] = useState(1);
//
//     useEffect(() => {
//         document.title = count.toString();
//     },)
//
//     useEffect(() => {
//         document.title = count.toString();
//     }, [])
//
//     useEffect(() => {
//         document.title = count.toString();
//     }, [count])
//
//     return <>
//         Hello {count} {fake}
//         <button onClick={() => {
//             setFake(fake + 1)
//         }}>fake
//         </button>
//         <button onClick={() => {
//             setCount(count + 1)
//         }}>count
//         </button>
//     </>
// };
//
// export const SetTimeoutExample = () => {
//     console.log('SimplePromo')
//     const [dateY, setYear] = useState();
//     const [dateH, setHour] = useState();
//     const [dateM, setMin] = useState();
//     const [dateS, setSec] = useState();
//
//
//     const getYear = () => setYear(new Date().getFullYear())
//     const getMin = () => setMin(new Date().getMinutes())
//     const getHour = () => setHour(new Date().getHours())
//     const getSec = () => setSec(new Date().getSeconds())
//
//     // useEffect(() => {
//     //     console.log('useEffect every render')
//     //     document.title = count.toString();
//     // }, )
//     let a = new Date().getSeconds()
//
//     useEffect(() => {
//         setInterval(() => {
//             getYear();
//             getMin();
//             getHour();
//             getSec();
//         }, 1000)
//     }, [])
//
//
//     return <>
//         {`${dateY}:${dateH}:${dateM}:${dateS}`}
//
//     </>
// };
//
// export const ResetTimeExample = () => {
//     const [count, setCount] = useState(1)
//     console.log('Component rendered with ' + count)
//
//     console.log('settimeoutExample')
//
//     useEffect(() => {
//         console.log('Effect occurred ' + count)
//         return () => {
//             console.log('Reset effect ' + count)
//         }
//
//     }, [count])
//
//     const increasse = () => {
//         setCount(count + 1)
//     }
//
//
//     return <>
//         Hello,counter: {count}
//         <button onClick={increasse}>+</button>
//     </>
// }
//
// export const KeysTrackerExample = () => {
//     const [text, setText] = useState()
//     console.log('Component rendered with ' + text)
//
//     useEffect(() => {
//         const handler = (e: KeyboardEvent) => {
//             console.log(e.key);
//             setText(text + e.key)
//         }
//         window.addEventListener('keypress', handler)
//         return () => {
//             window.removeEventListener('keypress', handler)
//         }
//     }, [text])
//
//     return <>
//         Typed text: {text}
//     </>
// }
//
// export const DocSetEventExample = () => {
//     const [symbol, setSymbol] = useState('');
//     console.log('DocSetEventExample is called')
//     useEffect(() => {
//
//         const adder = (e: KeyboardEvent) => {
//             console.log('adder is called' + symbol)
//             setSymbol(symbol + e.key)
//         }
//         document.addEventListener('keypress', adder)
//         return () => {
//             document.removeEventListener('keypress', adder)
//         }
//     }, [symbol])
//
//
//     return <>
//         {`This is state =>` + symbol}
//     </>
// }
//
// export const ClickerSettEventExample = () => {
//     const [texter, setTexter] = useState('');
//     console.log('ClickerSettEventExample is called')
//     useEffect(() => {
//         console.log('change' + texter)
//         const wrappers = (e: KeyboardEvent) => {
//             console.log('wrappers is called')
//             setTexter(e.key)
//         }
//         window.document.addEventListener('keypress', wrappers)
//         return () => {
//             window.document.removeEventListener('keypress', wrappers)
//         }
//     }, [])
//
//     return <>
//         {`state is called on` + texter}
//     </>
// }
//
