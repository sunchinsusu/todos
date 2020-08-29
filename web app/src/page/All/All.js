import React from 'react';
import './All.scss'
import { todos } from '../../mockData'
import { Card } from '../../component'

const All=(props)=> {

    const showDetailCallBack=(id)=>{
        props.callBack(id)
    }

    if (todos.length == 0) {
        return <div style={{marginLeft:'20%', marginTop: '15%', marginBottom: '31%' }}>There are nothing must to do...</div>
    }
    return (
        <div className="all">
            {
                todos.map((todo, index) => {
                    return <Card todo={todo} callBack={showDetailCallBack}></Card>
                })
            }
        </div>
    );
}

export default All;