import React, { useState } from 'react';
import "./index.css"
import requestDate from '../../../utils/requestDate';
import { useDispatch } from "react-redux"
import { loadCalls } from '../../../store/calls';
import dayCorrector from '../../../utils/dayCorrector';

const DatePicker = () => {
    const dispatch = useDispatch()
    const [days, setDays] = useState(1)
    function handleIncrement() {
        if (days < 30) {
            setDays((prevState) => (
                prevState += 1
            ))
            const time = requestDate(days)
            dispatch(loadCalls(time))
        }
    }
    function handleDecrement() {
        if (days > 1) {
            setDays((prevState) => (
                prevState -= 1
            ))
            const time = requestDate(days-2)
            dispatch(loadCalls(time))
        }
    }
    return (
        <div className='datepicker'>
            <div className='frame'>
                <img className='arrows' src="/img/arrowleft.png" alt="arrow" onClick={handleDecrement} />
                <img className='calendar' src="/img/icon-calendar.png" alt="calendar" />
                <p className='frametext'>{`${days} ${dayCorrector(days)}`}</p>
                <img className='arrows' src="/img/arrowright.png" alt="arrow" onClick={handleIncrement} />
            </div>
        </div>
    );
}
 
export default DatePicker;