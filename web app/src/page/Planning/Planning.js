import React from 'react';
import './Planning.scss'
import { todos } from '../../mockData'
import { Card } from '../../component'

const Planning=(props)=> {
    const showDetailCallBack=(id)=>{
        props.callBack(id)
    }

    if (todos.length == 0) {
        return <div style={{marginLeft:'20%', marginTop: '15%', marginBottom: '31%' }}>There are nothing must to do...</div>
    }
    return (
        <div className="planning">
            {
                todos.map((todo, index) => {
                    if(todo.status===1)
                        return <Card todo={todo} callBack={showDetailCallBack}></Card>
                })
            }
        </div>
    );
}

export default Planning;