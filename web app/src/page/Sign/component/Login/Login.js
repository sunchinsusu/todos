import React, { useState } from 'react';
import './Login.scss'
import MyAxios from '../../../../util/MyAxios';

const Login=(props)=> {
    const [account,setAccount] = useState({username:'',password:''})

    const btnRegistryClick=()=>{
        props.callBack();
    }

    const change=(event)=>{
        setAccount({...account,[event.target.name]:event.target.value})
    }

    const btnSigninClick=()=>{
        MyAxios('/signin','POST',account)
                .then(res=>{
                    localStorage.setItem("token",res.data.token)
                    localStorage.setItem("name",res.data.user)
                    window.location=window.location.href
                })
                .catch(err=>{
                    alert(err)
                })
    }

    return (
        <div className="login">
            <div className="form">
                <span>Username</span>
                <input type="text" name="username" defaultValue={account.username} onChange={change}/>
            </div>
            <div className="form">
                <span>Password</span>
                <input type="password" name="password" defaultValue={account.password} onChange={change}/>
            </div>
            <div className="control">
                <button onClick={btnSigninClick}>Sign in</button>
                <span onClick={btnRegistryClick}>Registry.</span>
            </div>
        </div>
    );
}

export default Login;