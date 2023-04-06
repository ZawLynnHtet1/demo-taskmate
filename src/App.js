import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTasks } from './components/ShowTasks';
import { useEffect, useState } from "react";

function App() {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});


  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="App">
        <Header  />
        <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task = {task}
        setTask = {setTask}
         />
        <ShowTasks 
        taskList={taskList} 
        setTaskList={setTaskList}
        task = {task}
        setTask = {setTask}
        />
    </div>
  );
}

export default App;
