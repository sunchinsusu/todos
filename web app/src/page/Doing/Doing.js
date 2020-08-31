import React, { useState, useEffect } from 'react';
import './Doing.scss'
import { Card } from '../../component'
import MyAxios from '../../util/MyAxios';

const Doing=(props)=> {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        MyAxios('/api/todo/status/2','GET',null)
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

    if (todos.length === 0) {
        return <div style={{marginLeft:'20%', marginTop: '15%', marginBottom: '31%' }}>There are nothing must to do...</div>
    }
    return (
        <div className="doing">
            {
                todos.map((todo) => {
                    if(todo.status===2)
                        return <Card todo={todo} callBack={showDetailCallBack}></Card>
                })
            }
        </div>
    );
}

export default Doing;