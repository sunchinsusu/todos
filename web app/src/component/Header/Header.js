import React from 'react';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Header=(props)=> {
    const user = localStorage.getItem("name")

    const btnLogoutClick=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        window.location = window.location.href
    }
    return (
        <div className="header" >
            <span>Sun Todos</span>
            {/* <div className="search">
                <input placeholder="Search for ..."/>
                <button><FontAwesomeIcon icon={faSearch} className="icon"/></button>
            </div> */}
            <span className="welcome">Welcome, {user}</span>
            <span className="logout" onClick={btnLogoutClick}><FontAwesomeIcon icon={faCaretDown} />Logout</span>
            <img/>
        </div>
    );
}

export default Header;