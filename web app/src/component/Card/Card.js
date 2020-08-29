import React, { useState, useEffect } from 'react';
import './Card.scss'

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


    const activeClick=()=>{

    }

    const finishClick=()=>{
        
    }

    const renderButton=()=>{
        if(props.todo.status === 1){
            return <button onClick={activeClick}>Active</button>
        }
        if(props.todo.status === 2){
            return <button onClick={finishClick}>Finish</button>
        }
    }

    const showDetailClick=(id)=>{
        props.callBack(id)
    }

    return (
        <div className="card">
            <div className="card-content">
                <span style={{ backgroundColor: color }}>{props.todo.dueDate}</span>
                <h3 onClick={()=>showDetailClick(props.todo.id)}>{props.todo.title}</h3>
            </div>
            {
                renderButton()
            }
        </div>
    );
}

export default Card;