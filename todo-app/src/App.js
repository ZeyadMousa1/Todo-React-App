import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [textButtonAdd, setTextButtonAdd] = useState('Add')
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Foot Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
    ])

    //Delete Task
    const DeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    const onToogle = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

    return (
        <div className="container">
            <Header headerTitle='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} textButton={showAddTask ? 'Close' : 'Add'} buttonColor={showAddTask ? 'red' : 'green'} />
            {showAddTask ? <AddTask onAdd={addTask} /> : null}
            <p style={{ backgroundColor: '#f4f4f4', display: "inline-block", paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, margin: 10, borderRadius: 10 }}>{tasks.length}</p>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={DeleteTask} onToogle={onToogle} /> : 'No Tasks to Show'}
        </div>
    );
}

export default App;
