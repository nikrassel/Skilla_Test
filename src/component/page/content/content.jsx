import React, { useState } from 'react';
import "./index.css"
import Balance from './balance';
import DatePicker from './DatePicker';
import Filters from './filters';
import Calls from '../main/calls';
import { useSelector } from 'react-redux';
import { getCalls, getLoadingStatus } from '../../../store/calls';

const Content = () => {
    const calls = useSelector(getCalls())
    const loadingStatus = useSelector(getLoadingStatus())
    const [types, setTypes] = useState("Все типы")
    function handleSwitchType(value) {
        setTypes(value)
    }
    return (
        <div className='maincontent'>
            <Balance />
            <DatePicker />
            <Filters type={types} onChange={handleSwitchType}/>
            {!loadingStatus && calls
                ? (<Calls calls={calls} type={types}/>)
                : (<h2 className='loadingstatus'>Loading...</h2>)
            }
        </div>
    );
}
 
export default Content;