import React, { useState } from 'react';
import './Switch.scss'

const classOn = 'switch-on'
const classOff = 'switch-off'
const Switch=(props)=> {
    const [turning, setTurning] = useState(classOff)
    const change=()=>{
        if(turning===classOn){
            setTurning(classOff)
            props.callBack(false)
        }
        else{
            setTurning(classOn)
            props.callBack(true)
        }
    }
    return (
        <div className={turning} onClick={change}>
            <div className="marble"></div>
        </div>
    );
}

export default Switch;