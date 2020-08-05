import React, {useState} from 'react';
import NamePage from "./components/NamePage";
import DialogPage from "./components/DialogPage";
import Triangle from "./components/Triangle";
import PersonalQualites from "./components/PersonalQualites";

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


function App() {
    let [arrQuality, setQuality] = useState([
        {id: 1, quality: "Долго сплю", status: false},
        {id: 2, quality: "React", status: true},
        {id: 3, quality: "Прогулки", status: false},
    ]);

    function removeTask(id: number) {
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
