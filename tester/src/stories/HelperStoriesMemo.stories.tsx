import React, {useMemo, useState} from "react"

export default {
    title: 'HelperStoriesMemo',
}


export const HalperExample1 = () => {

    const [country,setCountry] = useState([
        {id: 1, city: 'Kiev', population: 3000000},
        {id: 2, city: 'Odessa', population: 993120},
        {id: 3, city: 'Lviv', population: 721301},
        {id: 4, city: 'Minsk', population: 2000000},
        {id: 5, city: 'Gomel', population: 508839},
        {id: 6, city: 'Brest', population: 343985},
        {id: 7, city: 'Moscow', population: 11000000},
        {id: 8, city: 'Piter', population: 4991000},
        {id: 9, city: 'Belgorod', population: 369815},
    ])


return <>
    <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
        </>

};




