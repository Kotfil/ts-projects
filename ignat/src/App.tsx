import React, {useState, KeyboardEvent,ChangeEvent} from 'react';
import NamePage from "./components/NamePage";
import DialogPage from "./components/DialogPage";
import Triangle from "./components/Triangle";
import PersonalQualites from "./components/PersonalQualites";
import Inputer from "./components/Inputer";
import {v1} from "uuid";

export type PropType = {
    arrQuality: Array<arrPropType>
    removeTask: (taskId: number) => void
    changeFilters: (taskId: number) => void
}
export type arrPropType = {
    id: number
    quality: string
    status: boolean
}

type AppPropTypes = {
    addName: (name: string) => void
}


function App <AppPropTypes> () {
    let [arrQuality, setQuality] = useState([
        {id: 1, quality: "Долго сплю", status: false},
        {id: 2, quality: "React", status: true},
        {id: 3, quality: "Прогулки", status: false},
    ]);
    let [inputCheck, setinputCheck] = useState([
        {id: v1(),name: 'Cleric'}
        ]);
    // function checker() {
    //    return  inputCheck.map(t => <li key={t.id}><span>{t.name}</span></li>);
    // }


    function addName() {
        let newName = {id: v1(), name: '22'};
        let newNames = [newName,...inputCheck];
            setinputCheck(newNames)
    }

    const alertKPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            alert('123')
        }

    }

    function removeTask(id: number) {
        let filteredTasks = arrQuality.filter(t => t.id != id);
        setQuality(filteredTasks);
    }

    let [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    let tasksForFilter = arrQuality;

    function changeFilter(value: 'all' | 'active' | 'completed') {
        setFilter(value)
    }

    if (filter === 'active') {
        tasksForFilter = arrQuality.filter(t => t.status === false);
    }
    if (filter === 'completed') {
        tasksForFilter = arrQuality.filter(t => t.status === true);
    }

    return (
        <div className="App">
            <NamePage/>
            <Inputer inputCheck={inputCheck}/>
            <PersonalQualites
                removeTask={removeTask}
                arrQuality={tasksForFilter}
                changeFilter={changeFilter}
            />
            <DialogPage/>
            <Triangle/>

        </div>
    );
}

export default App;
