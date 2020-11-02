import React, {useEffect, useState} from "react";

type PropsType = {}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

      const intervalId =  setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {

            clearInterval(intervalId)
        }
    }, [])

    const func2String = (num: number) => num < 10 ? '0' + num : num

    return (
        <div>
            <span>{func2String(date.getHours())}</span>
            :
            <span>{func2String(date.getMinutes())}</span>
            :
            <span>{func2String(date.getSeconds())}</span>

        </div>
    )
}