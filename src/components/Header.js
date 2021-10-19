import React from 'react'
import Button from './Button'

const Header = (props) => {
    
    return (
        <header className="d-flex justify-content-between">
            <h1>{props.title}</h1>
            <Button text={props.showAdd ? 'Cancel' : 'Add New Task'} color={props.showAdd ? 'red' : 'green'} onClick = {props.onAdd}></Button>
        </header>
    )
}

export default Header
