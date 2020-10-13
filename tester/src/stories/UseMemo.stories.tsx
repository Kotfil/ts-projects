import React, {useMemo, useState} from "react"
import {UncontrolledRaiting} from "../components/UncontrolledRaiting/UncontrolledRaiting";

export default {
    title: 'UseMemo',
    component: UncontrolledRaiting
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Filipp', 'Viktoria']);

const newArr = useMemo(() => {
    const newArr = users.filter(i => i.toLowerCase().indexOf('p') > -1);
    return newArr
},[users])

    const addUser = () => {
        const newUser = [...users, 'Filipps'];
        setUsers(newUser)
    };


    return <>
        <button onClick={() => {setCount(count+ 1)}}>+</button>
        <button onClick={() => {addUser()}}>ADD USER</button>
        {count}
        <Users users={newArr} />
    </>
};




