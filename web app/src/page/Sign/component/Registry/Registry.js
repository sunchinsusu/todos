import React, { useState } from 'react';
import './Registry.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import MyAxios from '../../../../util/MyAxios';


const Registry=(props)=> {
    const [registry,setRegistry] = useState({})
    const [pwConfirm, setPwConfirm] = useState('')

    const btnLoginClick=()=>{
        props.callBack()
    }

    const registryClick=()=>{
        if(pwConfirm===registry.password && registry.password.length > 0){
            MyAxios('/registry','POST',registry)
                .then(res=>{
                    localStorage.setItem("token",res.data.token)
                    localStorage.setItem("name",res.data.user)
                    window.location="/"
                })
                .catch(err=>{
                    alert(err)
                })
        }
        else{
            alert("Nhap lai pass word")
        }
    }

    const changeConfirmPW=(event)=>{
        setPwConfirm(event.target.value)
    }

    const change=(event)=>{
        setRegistry({...registry, [event.target.name]:event.target.value})
    }

    return (
        <div className="registry">
            <span className="back" onClick={btnLoginClick}><FontAwesomeIcon icon={faArrowLeft} style={{ paddingRight: '1%' }}/>Login</span>
            <div className="form">
                <span>Name</span>
                <input type="text" name="name" defaultValue={registry.name} onChange={change}/>
            </div>
            <div className="form">
                <span>Username</span>
                <input type="text" name="username" defaultValue={registry.username} onChange={change} />
            </div>
            <div className="form">
                <span>Password</span>
                <input type="password" name="password" defaultValue={registry.password} onChange={change} />
            </div>
            <div className="form">
                <span>Confirm Password</span>
                <input type="password" name="" onChange={changeConfirmPW} />
            </div>
            <div className="control">
                <button onClick={registryClick} >Registry</button>
            </div>
        </div>
    );
}

export default Registry;