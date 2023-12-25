import React from 'react'
import Task from './Task'

function Tasks({ tasks, onDelete, onToogle }) {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task._id} task={task} onDelete={onDelete} onToogle={onToogle} />
            ))}
        </>
    )
}

export default Tasks
