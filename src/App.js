import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at University',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 11:30am',
        reminder: false
    }
  ])

  // DELETE TASK
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
    // console.log('Task #' + id + ' deleted');
  }

  //TOGGLE REMINDER
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    // console.log(id);
  }

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
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