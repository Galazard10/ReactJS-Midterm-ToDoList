import React, { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'

const AddTask = (props) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();

        props.onAdd({text, day, reminder})

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='mx-auto border border-info' onSubmit={onSubmit}>
            <div className='p-3'>
                <label>Task</label>
                <input type='text' className='mt-1 form-control' value={text} onChange={(event) => setText(event.target.value)} placeholder='Type the Task' required/>
                <label className='mt-2'>Day & Time</label>
                <input type='text' className='mt-1 form-control' value={day} onChange={(event) => setDay(event.target.value)} placeholder='Type Day & Time' required/>
                <label className='mt-2'>Set Reminder:</label>
                <input type="checkbox" className="btn-check" value={reminder} onChange={(event) => setReminder(event.currentTarget.checked)} checked={reminder} id="btncheck1" autoComplete="off" />
                <label className="btn btn-outline-secondary btn-sm mx-3" htmlFor="btncheck1"><BsCheckLg /></label>
                <button type='submit' className='btn btn-success form-control mt-3 btn-sm'>Add Task</button>
            </div>
        </form>
    )
}

export default AddTask