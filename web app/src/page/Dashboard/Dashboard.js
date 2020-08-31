import React, { useState, useEffect } from 'react';
import './Dashboard.scss'
import { Clock } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMugHot } from '@fortawesome/free-solid-svg-icons'
import MyAxios from '../../util/MyAxios';

const Dashboard = (props) => {

    const [stat, setStat] = useState({ future: 0, present: 0, fault: 0, success: 0 })

    const openDoing = () => {
        props.cbOpenDoing()
    }

    useEffect(() => {
        MyAxios('/api/todo/stat', 'GET', null)
            .then(res => {
                setStat(res.data)
            })
            .catch(err => {
                window.location = "/login"
            })
    }, {})

    return (
        <div className="dashboard">
            <div className="stat">
                <div className="block blue">
                    <div className="title">IN FUTURE</div>
                    <div className="body">{stat.future}</div>
                </div>
                <div className="block yellow">
                    <div className="title">PRESENT</div>
                    <div className="body">{stat.present}</div>
                </div>
                <div className="block red">
                    <div className="title">FAULT</div>
                    <div className="body">{stat.fault}</div>
                </div>
                <div className="block green">
                    <div className="title">SUCCESS</div>
                    <div className="body">{stat.success}</div>
                </div>
            </div>
            <div className="notify">
                <div className="time">
                    <Clock />
                </div>
                <div className="content">
                    <p><FontAwesomeIcon icon={faMugHot} style={{ paddingRight: '1%' }} />Chuc ban mot ngay tot lanh!</p>
                    <p className="alert" onClick={openDoing}><FontAwesomeIcon icon={faBell} style={{ paddingRight: '1%' }} className="bell" />Ban dang co {stat.present} viec can lam hom nay</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;