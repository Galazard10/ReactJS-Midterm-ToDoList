import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // FETCH TASKS
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json() 

    return data;
    // console.log(data)
  }

  // DELETE TASK
  const deleteTask = async(id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter((task) => task.id !== id))
    // console.log('Task #' + id + ' deleted');
  }
  
  // FETCH TASK
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json() 

    return data;
    // console.log(data)
  }

  //TOGGLE REMINDER
  const toggleReminder = async (id) =>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
    // console.log(id);
  }

  // ADD TASK
  const addTask = async (task) => {
    const res =  await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask])
    // console.log(task)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto mt-5 border">
          <div className='p-3'>
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Manager"/>      
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Display'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;