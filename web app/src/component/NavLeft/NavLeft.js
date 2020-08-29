import React from 'react';
import './NavLeft.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBomb, faCalendarAlt, faAllergies } from '@fortawesome/free-solid-svg-icons'
import listLink from './listLink';

const NavLeft = (props) => {

    var year = new Date().getFullYear();
    var str = ' ' + year + '.SunChinsusu';

    const linkClick=(id)=>{
        props.callBack(id)
    }

    return (
        <div className="nav-left">
            <div className="list-link">
                <ul>
                    {
                        listLink.map((item, index) => {
                            if (props.tab===item.id) {
                                return <li className="active" onClick={()=>linkClick(item.id)}><FontAwesomeIcon icon={item.icon} className="icon" />{item.title}</li>
                            }
                            return <li onClick={()=>linkClick(item.id)}><FontAwesomeIcon icon={item.icon} className="icon" />{item.title}</li>
                        })
                    }
                </ul>
            </div>
            <div className="footer">
                <span>&#169;{str}</span>
            </div>

        </div>
    );
}

export default NavLeft;