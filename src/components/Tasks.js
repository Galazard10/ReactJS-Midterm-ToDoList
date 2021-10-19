import React, { useState } from 'react'
import Task from './Task'

const Tasks = (props) => {
    return (
        <div className="mt-2">
            {props.tasks.map((task) => (
                <Task key={task.id} task={task} onDelete = {props.onDelete} onToggle={props.onToggle} />
            ))}  
        </div>
    )
}


export default Tasks
