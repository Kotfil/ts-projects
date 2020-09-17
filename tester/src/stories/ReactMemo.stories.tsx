import React, {useState} from "react"

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersMemo = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersMemo)

export const Example1 = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Filipp', 'Viktoria']);
    const addUser = () => {
        const newUser = [...users, 'Filipps']
        setUsers(newUser)
    }



    return <>
        <button onClick={() => {setCount(count+ 1)}}>+</button>
        <button onClick={addUser}>add user</button>
    <Users users={users}/>
    <NewMessagesCounter count={count}/>
    </>
}

