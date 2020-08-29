import React, { useEffect, useState } from 'react';
import './Detail.scss'
import { todos } from '../../mockData'
import { useParams } from 'react-router-dom';
import { Switch } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faSave } from '@fortawesome/free-solid-svg-icons'
import { renderIntoDocument } from 'react-dom/test-utils';

const classDisable = "class-disable"
const classEnable = "class-enable"
const display = 'block'
const hidden = 'none'

const Detail = (props) => {
    const id = props.id;
    const [todo, setTodo] = useState({})
    const [disabled, setDisabled] = useState(true)
    const [classInput, setClassInput] = useState(classDisable)
    const [displayUpdate, setDisplayUpdate] = useState(hidden)

    useEffect(() => {
        setTodo(todos.find((todo) => { return todo.id === id }))
    }, {})

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

    const activeClick = () => {

    }

    const finishClick = () => {

    }

    const renderButton = () => {
        if (todo.status === 1) {
            return <button onClick={activeClick}>
                        <FontAwesomeIcon icon={faArrowCircleRight} style={{ paddingRight: '1%' }} />
                        Active
                    </button>
        }
        if (todo.status === 2) {
            return <button onClick={finishClick}>
                        <FontAwesomeIcon icon={faArrowCircleRight} style={{ paddingRight: '1%' }} />
                        Finish
                    </button>
        }
    }

    return (
        <div className="detail">
            <div className="head">
                <input type="text" defaultValue={todo.title} disabled={disabled} className={classInput} style={{fontSize:'large' ,backgroundColor:'rgb(197, 197, 197)'}}/>
                <div className="edit">
                    <span>Edit</span>
                    <Switch callBack={switchCallBack} />
                </div>
            </div>
            <div className="body">
                <div className="data">
                    <div className="form-group">
                        <div>Date</div>
                        <input type="date" defaultValue={new Date(todo.date)} disabled={disabled} className={classInput}></input>
                    </div>
                    <div className="form-group">
                        <div>Due Date</div>
                        <input type="date" defaultValue={todo.dueDate} disabled={disabled} className={classInput}></input>
                    </div>
                    <div className="form-group">
                        <div>Description</div>
                        <textarea type="textarea" defaultValue={todo.des} disabled={disabled} className={classInput}></textarea>
                    </div>
                    <button style={{ display: displayUpdate }}>
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