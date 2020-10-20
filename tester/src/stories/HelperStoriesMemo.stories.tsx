import React, {useMemo, useState} from "react"

export default {
    title: 'HelperStoriesMemo',
}

type PropType = {
    id: number
    city: string
    population: number
    country: string
    count: number
}

export const HelperExample1 = () => {
    console.log('country')
    const [count, setCount] = useState(0);
    const [country, setCountry] = useState([
        {id: 1, city: 'Kiev', population: 3000000, country: 'Ukraine'},
        {id: 2, city: 'Odessa', population: 993120, country: 'Ukraine'},
        {id: 3, city: 'Lviv', population: 721301, country: 'Ukraine'},
        {id: 4, city: 'Minsk', population: 2000000, country:'Belarus'},
        {id: 5, city: 'Gomel', population: 508839, country:'Belarus'},
        {id: 6, city: 'Brest', population: 343985, country:'Belarus'},
        {id: 7, city: 'Moscow', population: 11000000, country: 'Russian'},
        {id: 8, city: 'Piter', population: 4991000, country: 'Russian'},
        {id: 9, city: 'Belgorod', population: 369815, country: 'Russian'},
    ]);

     return (
    <div>
        <AddClick count={count}/>
        <Ukraine country={country.filter(i  => i.country === 'Ukraine')} />
        <Belarus country={country.filter(i  => i.population <= 500000)}/>
        <Russian country={country.filter(i  => i.country === 'Russian')}/>
        </div>
    )

};
type AddClickPropsType = {
    count: number
    setCount: any
}


const AddClick = (props: AddClickPropsType) => {
    return (
        <div>
            <button onClick={() => (props.setCount(props.count + 1))}>CLICK</button>
        </div>
    )
}


const Ukraine = (props: {country: Array<PropType>}) => {


        return <div onClick={() => console.log('Ukraine')}>

                <select>

                    {

                        props.country.map(t => {
                            return (

                                <option key={t.id} value={t.id}>
                                    {t.city}
                                </option>
                            )
                        })
                    }
                </select>
        </div>
    }



const Belarus = (props: {country: Array<PropType>}) => {

    return (
      <div onClick={() => console.log('Belarus')}>
            <select>
                {
                    props.country.map(t => {
                        return (
                            <option key={t.id} value={t.id}>
                                {t.city}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

const Russian = (props: {country: Array<PropType>}) => {
    return (
        <div onClick={() => console.log('Russian')}>
            <select>
                {
                    props.country.map(t => {
                        return (
                            <option key={t.id} value={t.id}>
                                {t.city}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}








