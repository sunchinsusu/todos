import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import './Add.scss'
import MyAxios from '../../util/MyAxios';
const Add = (props) => {


    const [todo,setTodo] = useState({
        title : '',
        date : '',
        dueDate : '',
        des : ''
    })

    const change=(event)=>{
        setTodo({...todo,[event.target.name]:event.target.value})
    }

    const btnAddClick=()=>{
        MyAxios('/api/todo', 'POST', todo)
            .then(res => {
                alert("Add todo successfully")
                window.location = window.location.href
            })
            .catch(err => {
                window.location = "/login"
            })
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
                <input name="date" type="date" defaultValue={todo.date} className="input" onChange={change}></input>
            </div>
            <div className="form-group">
                <span>Due Date</span>
                <input name="dueDate" type="date" defaultValue={todo.dueDate} className="input" onChange={change}></input>
            </div>
            <div className="form-group">
                <span>Description</span>
                <textarea name="des"  defaultValue={todo.des} className="input" onChange={change}></textarea>
            </div>
            <button onClick={btnAddClick}>
                <FontAwesomeIcon icon={faSave} style={{ paddingRight: '1%' }} />
                Create
            </button>
        </div>
    );
}

export default Add;