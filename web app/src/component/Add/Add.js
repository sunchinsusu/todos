import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import './Add.scss'
const Add = (props) => {
    const [todo,setTodo] = useState({
        title : '',
        date : '',
        dueDate : '',
        des : ''
    })

    const change=(event)=>{
        console.log(todo)
        setTodo({...todo,[event.target.name]:event.target.value})
    }

    return (
        <div className="add">
            <legend>Add new Todo</legend>
            <div className="form-group">
                <span>Title</span>
                <input name="title" type="text" defaultValue={todo.title} className="input" onChange={change}></input>
            </div>
            <div className="form-group">
                <span>Date</span>
                <input name="date" type="date" defaultValue={new Date(todo.date)} className="input" onChange={change}></input>
            </div>
            <div className="form-group">
                <span>Due Date</span>
                <input name="dueDate" type="date" defaultValue={new Date(todo.dueDate)} className="input" onChange={change}></input>
            </div>
            <div className="form-group">
                <span>Description</span>
                <textarea name="des" type="textarea" defaultValue={todo.des} className="input" onChange={change}></textarea>
            </div>
            <button>
                <FontAwesomeIcon icon={faSave} style={{ paddingRight: '1%' }} />
                Update
            </button>
        </div>
    );
}

export default Add;