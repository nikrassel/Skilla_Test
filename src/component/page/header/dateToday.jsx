import React from 'react';
import "./index.css"
import dateFormater from '../../../utils/dateFormater';

const DateToday = () => {
    const today = new Date()
    return (
        <div className='datecomponent'>
            {dateFormater(today)}
        </div>
    );
}
 
export default DateToday;