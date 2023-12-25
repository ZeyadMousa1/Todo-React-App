import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/addTask'
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    // All Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:9000/api/v1/tasks')
        const data = await res.json();
        return data['tasks'];
    }

    // Single Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:9000/api/v1/tasks/${id}`)
        const data = await res.json();
        return data['task']
    }

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromAPI = await fetchTasks()
            setTasks(tasksFromAPI)
        }

        getTasks()
    }, [])


    //Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:9000/api/v1/tasks/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task._id !== id))
    }

    //Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:9000/api/v1/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()

        setTasks([...tasks, data['task']])
    }

    const onToogle = async (id) => {
        const taskToToogle = await fetchTask(id);
        const upTask = { ...taskToToogle, reminder: !taskToToogle.reminder }
        const res = await fetch(`http://localhost:9000/api/v1/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(upTask),
        })
        const data = await res.json();
        setTasks(tasks.map((task) => task._id === id ? { ...task, reminder: data['task'].reminder } : task))
    }

    return (
        <div className="container">
            <Header headerTitle='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} textButton={showAddTask ? 'Close' : 'Add'} buttonColor={showAddTask ? 'red' : 'green'} />
            {showAddTask ? <AddTask onAdd={addTask} /> : null}
            <p style={{ backgroundColor: '#f4f4f4', display: "inline-block", paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, margin: 10, borderRadius: 10 }}>{tasks.length}</p>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToogle={onToogle} /> : 'No Tasks to Show'}
            <Footer />
        </div>
    );
}

export default App;
