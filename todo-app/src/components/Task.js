import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete, onToogle }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToogle(task._id)}>
            <h3>{task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task._id)}

                />
            </h3>
            <p>{task.createdAt}</p>
        </div>
    )
}

export default Task;