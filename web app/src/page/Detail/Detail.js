import React, { useEffect, useState } from 'react';
import './Detail.scss'
import { todos } from '../../mockData'
import { useParams } from 'react-router-dom';
import { Switch } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faSave } from '@fortawesome/free-solid-svg-icons'
import { renderIntoDocument } from 'react-dom/test-utils';
import MyAxios from '../../util/MyAxios';

const classDisable = "class-disable"
const classEnable = "class-enable"
const display = 'block'
const hidden = 'none'

const Detail = (props) => {
    const todoFromProps = props.todo;
    const [todo, setTodo] = useState(todoFromProps)
    const [disabled, setDisabled] = useState(true)
    const [classInput, setClassInput] = useState(classDisable)
    const [displayUpdate, setDisplayUpdate] = useState(hidden)

    const switchCallBack = (turning) => {
        setDisabled(!turning)
        if (turning) {
            setClassInput(classEnable)
            setDisplayUpdate(disabled)
        }
        else {
            setClassInput(classDisable)
            setDisplayUpdate(hidden)
        }
    }

    const renderLabel = () => {
        switch (todo.status) {
            case 1:
                return <label style={{ backgroundColor: '#007bfe' }}>Going to do</label>
            case 2:
                return <label style={{ backgroundColor: '#ffc106' }}>Doing</label>
            case 3:
                return <label style={{ backgroundColor: '#27a745' }}>Finished</label>
            case 4:
                return <label style={{ backgroundColor: '#dc3545' }}>Miss</label>
            default:
                return <label style={{ backgroundColor: '#007bfe' }}>Going to do</label>
        }
    }

    const goToNextStep=()=>{
        MyAxios('/api/todo/next-step/'+todo.id, 'PUT', null)
            .then(res => {
                setTodo(res.data)
                alert("Change Step Successfully!")
            })
            .catch(err => {
                window.location = "/login"
            })
    }

    const renderButton = () => {
        if (todo.status === 1) {
            return <button onClick={goToNextStep}>
                        <FontAwesomeIcon icon={faArrowCircleRight} style={{ paddingRight: '1%' }} />
                        Active
                    </button>
        }
        if (todo.status === 2) {
            return <button onClick={goToNextStep}>
                        <FontAwesomeIcon icon={faArrowCircleRight} style={{ paddingRight: '1%' }} />
                        Finish
                    </button>
        }
    }

    const change=(event)=>{
        setTodo({...todo,[event.target.name]:event.target.value})
    }

    const btnUpdateClick=()=>{
        MyAxios('/api/todo', 'PUT', todo)
            .then(res => {
                setTodo(todo)
                alert("Update Successfully!")
                window.location.href = window.location
            })
            .catch(err => {
                window.location = "/login"
            })
    }

    return (
        <div className="detail">
            <div className="head">
                <input name="title" type="text" onChange={change} defaultValue={todo.title} disabled={disabled} className={classInput} style={{fontSize:'large' ,backgroundColor:'rgb(197, 197, 197)'}}/>
                <div className="edit">
                    <span>Edit</span>
                    <Switch callBack={switchCallBack} />
                </div>
            </div>
            <div className="body">
                <div className="data">
                    <div className="form-group">
                        <div>Date</div>
                        <input name="date" type="date" defaultValue={todo.date} disabled={disabled} className={classInput} onChange={change}></input>
                    </div>
                    <div className="form-group">
                        <div>Due Date</div>
                        <input name="dueDate" type="date" defaultValue={todo.dueDate} disabled={disabled} className={classInput} onChange={change}></input>
                    </div>
                    <div className="form-group">
                        <div>Description</div>
                        <textarea name="des" defaultValue={todo.des} disabled={disabled} className={classInput} onChange={change}></textarea>
                    </div>
                    <button style={{ display: displayUpdate }} onClick={btnUpdateClick}>
                        <FontAwesomeIcon icon={faSave} style={{ paddingRight: '1%' }} />
                        Update
                    </button>

                </div>
                <div className="right">
                    {renderLabel()}
                    {renderButton()}
                </div>
            </div>
        </div>
    );
}

export default Detail;