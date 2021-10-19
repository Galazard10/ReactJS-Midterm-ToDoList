import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className={`bg-light border mb-2 ${props.task.reminder ? 'border-success border-2': '' } `} onDoubleClick={() => props.onToggle(props.task.id)}>
            <div className="p-3 pb-0">
                <h5>{props.task.text} <FaTimes className="float-end text-danger" onClick={() => props.onDelete(props.task.id)}/></h5>
                <p>{props.task.day}</p>
            </div>
        </div>
    )
}

export default Task
