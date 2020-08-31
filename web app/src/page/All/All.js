import React, { useState, useEffect } from 'react';
import './All.scss'
import { Card } from '../../component'
import MyAxios from '../../util/MyAxios';

const All=(props)=> {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        MyAxios('/api/todo','GET',null)
                .then(res=>{
                    console.log(res.data)
                    setTodos(res.data)
                })
                .catch(err=>{
                    window.location = "/login"
                })
    },[])

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