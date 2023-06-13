import React from 'react';
import TableHeader from './tableHeader';
import "./index.css"
import TableBody from './tableBody';

const Calls = ({ calls, type }) => {
    let filtredCalls
    if(type === "Входящие") {
        filtredCalls = calls.filter((call) => call.in_out === 0)
    } else if (type === "Исходящие") {
        filtredCalls = calls.filter((call) => call.in_out === 1)
    } else { filtredCalls = [ ...calls ] }
    console.log(filtredCalls)
    return (
        <div className='calls'>
            <table className='callstable'>
                <TableHeader />
                <TableBody calls={filtredCalls}/>
            </table>
        </div>
    );
}
 
export default Calls;