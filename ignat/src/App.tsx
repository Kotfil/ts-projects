import React, {useState} from 'react';
import NamePage from "./components/NamePage";
import DialogPage from "./components/DialogPage";
import Triangle from "./components/Triangle";
import PersonalQualites from "./components/PersonalQualites";
import LocalInput from "./components/LocalInput";
import {v1} from "uuid";

export type PropType = {
    arrQuality: Array<arrPropType>
    removeTask: (taskId: number) => void
    changeFilters: (taskId: number) => void
}
export type arrPropType = {
    id: string
    quality: string
    status: boolean
}


function App() {
    let [arrQuality, setQuality] = useState([
        {id: v1(), quality: "Долго сплю", status: false},
        {id: v1(), quality: "React", status: true},
        {id: v1(), quality: "Прогулки", status: false},
    ]);


    function removeTask(id: string) {
        let filteredTasks = arrQuality.filter(t => t.id != id);
        setQuality(filteredTasks);
    }
    let [filter, setFilter] = useState<'all'|'active' |'completed' >('all');
    let tasksForFilter = arrQuality;

    if(filter === 'active') {
        tasksForFilter = arrQuality.filter(t => t.status === false);
    }
    if(filter === 'completed') {
        tasksForFilter = arrQuality.filter(t => t.status === true);
    }
    function changeFilter(value: 'all'|'active' |'completed') {
        setFilter(value)
    }

    return (
        <div className="App">
            <NamePage/>
            <LocalInput />
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
