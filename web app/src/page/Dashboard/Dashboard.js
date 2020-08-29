import React from 'react';
import './Dashboard.scss'
import { Clock } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMugHot} from '@fortawesome/free-solid-svg-icons'

const Dashboard = (props) => {
    const openDoing=()=>{
        props.cbOpenDoing()
    }
    return (
        <div className="dashboard">
            <div className="stat">
                <div className="block blue">
                    <div className="title">IN FUTURE</div>
                    <div className="body">12</div>
                </div>
                <div className="block yellow">
                    <div className="title">PRESENT</div>
                    <div className="body">5</div>
                </div>
                <div className="block red">
                    <div className="title">FAULT</div>
                    <div className="body">2</div>
                </div>
                <div className="block green">
                    <div className="title">SUCCESS</div>
                    <div className="body">100</div>
                </div>
            </div>
            <div className="notify">
                <div className="time">
                    <Clock/>
                </div>
                <div className="content">
                    <p><FontAwesomeIcon icon={faMugHot} style={{ paddingRight: '1%' }}/>Chuc ban mot ngay tot lanh!</p>
                    <p className="alert" onClick={openDoing}><FontAwesomeIcon icon={faBell} style={{ paddingRight: '1%' }} className="bell"/>Ban dang co 5 viec can lam hom nay</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;