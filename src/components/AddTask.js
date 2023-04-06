
export const AddTask = ({ taskList, setTaskList, task, setTask }) => {

        const handleSubmit = (e) =>{
            e.preventDefault();

            if (task.id) {
                const date = new Date();
                const updatedTaskList = taskList.map((todo)=>(task.id === todo.id ? {id:date, name:task.name, date:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: todo))
                setTaskList(updatedTaskList);
                setTask({});
            }else{
                const date = new Date();
                const newTask = {
                    id:date.getTime(),
                    name: e.target.task.value,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }

                setTaskList([...taskList, newTask]);
                setTask({});
            }


            
        }
    

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" value={task.name || ""} onChange={e=>setTask({...task,name:e.target.value})} name="task" placeholder="Add Task" autoComplete="off" maxLength="25"  />
            <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
    </section>
    )
  }
