import React, { useState, useEffect } from 'react';
import './Clock.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-solid-svg-icons'

const Clock=(props)=> {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(
            () => {
                const newDate = new Date();
                setDate(newDate)
            }, 1000
        )
    })

    return (
        <div className="clock">
            <FontAwesomeIcon icon={faClock} style={{ paddingRight: '1%' }} />
            {date.toLocaleTimeString()}, {date.toLocaleDateString()}
        </div>
    );
}

export default Clock;