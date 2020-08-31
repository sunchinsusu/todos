import React, { useState } from 'react';
import {Login, Registry} from './component'

const Sign=(props)=> {
    const [showRegistry,setShowRegistry] = useState(false)

    const changePage=()=>{
        setShowRegistry(!showRegistry)
    }
    if(showRegistry==false){
        return <Login callBack={changePage}/>
    }
    else{
        return <Registry callBack={changePage}/>
    }
}

export default Sign;