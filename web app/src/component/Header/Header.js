import React from 'react';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header=(props)=> {
    return (
        <div className="header" >
            <span>Sun Todos</span>
            {/* <div className="search">
                <input placeholder="Search for ..."/>
                <button><FontAwesomeIcon icon={faSearch} className="icon"/></button>
            </div> */}
            <span className="welcome">Welcome, Nguyen Tien Thuat</span>
            <img/>
        </div>
    );
}

export default Header;