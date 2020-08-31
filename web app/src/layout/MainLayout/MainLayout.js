import React, { useState } from 'react';
import { Header, NavLeft, Footer, Add } from '../../component';
import './MainLayout.scss'
import { Dashboard, Doing, Planning, All, Detail } from '../../page';

const MainLayout = (props) => {
    const [displayFormAdd, setDisplayFormAdd] = useState('none')
    const [tab,setTab]=useState(1);
    const [showDetail,setShowDetail] = useState(false)
    const [todoDetail, setTodoDetail] = useState({})

    const btnAddClick = () => {
        if (displayFormAdd==='none') {
            setDisplayFormAdd('block')
        }
        else {
            setDisplayFormAdd('none')
        }
    }

    const navLeftCallBack=(id)=>{
        setShowDetail(false)
        setTab(id);
    }

    const showDetailCallBack=(todo)=>{
        setTodoDetail(todo)
        setShowDetail(true)
    }

    const handleCbOpenDoing=()=>{
        setTab(2)
    }

    const renderTab=()=>{
        if(showDetail===true){
            return <Detail todo={todoDetail} />
        }
        switch(tab){
            case 1:
                return <Dashboard cbOpenDoing={handleCbOpenDoing}/>
            case 2:
                return <Doing callBack={showDetailCallBack}/>
            case 3:
                return <Planning callBack={showDetailCallBack}/>
            case 4:
                return <All callBack={showDetailCallBack}/>
            default:
                return <Dashboard cbOpenDoing={handleCbOpenDoing}/>
        }
    }

    return (
        <div className="main-layout" >
            <div className="main" >
                <Header/>
                <div className="wrap-main-content">
                    <div className="main-content">
                        <NavLeft tab={tab} callBack={navLeftCallBack}/>
                        <div className="content-footer">
                            <div className="content">
                                {renderTab()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sidebar" style={{display:displayFormAdd}}>
                <Add />
            </div>
            <div className="btn-add">
                <button onClick={btnAddClick}>+</button>
            </div>
        </div>
    );
}

export default MainLayout;