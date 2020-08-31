import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoPropTypes = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskStateProp = {
     [key: string]:Array<TaskType>
}

function App() {
    let todoListID1 = v1();
    let todoListID2 = v1();

    let [toDoLists, setToDoLists] = useState<Array<TodoPropTypes>>([
        {id: todoListID1, title: 'What to learn', filter: "all"},
        {id: todoListID2, title: 'What to buy', filter: "active"},
    ]);

    function removeTodoList(todoListID:string) {
        let newtoDoLists = toDoLists.filter(t => t.id !== todoListID);
        setToDoLists(newtoDoLists)
        delete tasks[todoListID];
        setTasks({...tasks});
    }

    let [tasks, setTasks] = useState<TaskStateProp>({
        [todoListID1]: [
            {id: v1(), title: "React", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todoListID2]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "Dog", isDone: true},
            {id: v1(), title: "Wolf", isDone: false},
            {id: v1(), title: "Elephant", isDone: false},
            {id: v1(), title: "Cow", isDone: false},
        ],
    });
    function changeFilter(value: FilterValuesType, todoListID: string) {
        let todoList = toDoLists.find(tl => tl.id === todoListID);
        if (todoList) {
            todoList.filter = value;
            setToDoLists([...toDoLists])
        }
    }
    function removeTask(taskID: string,todoListID: string) {
        let todoList = tasks[todoListID];
        tasks[todoListID] = todoList.filter(t => t.id !== taskID);
        setTasks({...tasks});
    }
    function addTask(title: string,todoListID: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let todoList = tasks[todoListID];
            tasks[todoListID] = [newTask, ...todoList];
            setTasks({...tasks})
    }

    function changeStatus(taskId: string, isDone: boolean,todoListID:string) {
        let todoList = tasks[todoListID];
        let task = todoList.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks});
    }


    return (
        <div className="App">
            {toDoLists.map(tl => {
                    let tasksForTodolist = tasks[tl.id];
                    if (tl.filter === "active") {
                        tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            key={tl.id}
                            id={tl.id}
                            title={tl.title}
                            filter={tl.filter}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            removeTodoList={removeTodoList}
                           />
                            )
                    })
                }
            }
        </div>
    );
}

export default App;
