import React, { useState, useEffect } from 'react';
import './Card.scss'
import MyAxios from '../../util/MyAxios';

const doing = '#ffc106'
const success = '#27a745'
const will = '#007bfe'
const miss = '#dc3545'
const Card = (props) => {
    const [color, setColor] = useState(doing)

    useEffect(() => {
        switch (props.todo.status) {
            case 1:
                setColor(will)
                break;
            case 2:
                setColor(doing)
                break;
            case 3:
                setColor(success)
                break;
            case 4:
                setColor(miss)
                break;
            default:
                setColor(will)
        }
    }, '')


    const goToNextStep=()=>{
        MyAxios('/api/todo/next-step/'+props.todo.id, 'PUT', null)
            .then(res => {
                window.location = window.location.href
                alert("Change Step Successfully!")
            })
            .catch(err => {
                window.location = "/login"
            })
    }

    const renderButton=()=>{
        if(props.todo.status === 1){
            return <button onClick={goToNextStep}>Active</button>
        }
        if(props.todo.status === 2){
            return <button onClick={goToNextStep}>Finish</button>
        }
    }

    const showDetailClick=(todo)=>{
        props.callBack(todo)
    }

    return (
        <div className="card">
            <div className="card-content">
                <span style={{ backgroundColor: color }}>{props.todo.dueDate}</span>
                <h3 onClick={()=>showDetailClick(props.todo)}>{props.todo.title}</h3>
            </div>
            {
                renderButton()
            }
        </div>
    );
}

export default Card;