import React, { useState } from 'react';
import "./index.css"
import callTime from '../../../utils/callTime';

const TableBody = ({ calls }) => {
    const [showRecord, setShowRecord] = useState("")
    function handleShowRecord(target) {
        const recordId = target.target.id
        setShowRecord(recordId)
    }
    // function handleHideRecord() {
    //     setShowRecord("")
    // }
    return (
        <tbody>
            {calls.map((item) => (
                <tr id={item.id} key={item.id} className='tablecontent' onMouseEnter={handleShowRecord}>
                    <td className='typecol'>
                        <img src={item.in_out ? "/img/outcoming.png" : "/img/incoming.png"} alt="calltype" />
                    </td>
                    <td className='timecol'>
                        <p>{item.date.slice(11, 16)}</p>
                    </td>
                    {item.person_avatar && (
                        <td className='avatarcol'>
                            <img src={item.person_avatar} alt="avatar" />
                        </td>
                    )}
                    <td className='numbercol'>
                        <p>{item.from_number}</p>
                    </td>
                    {item.source && (
                        <td className='sourcecol'>
                            <p>{item.source}</p>
                        </td>
                    )}
                    {item.record && showRecord.includes(item.id) && (
                        <tr className='record'>
                            <img className='playbutton' src="/img/play.png" alt="play" />
                            <img className='recordline' src="/img/recordline.png" alt="line" />
                            <img className='download' src="/img/download.png" alt="download" />
                        </tr>
                    )}
                    {item.time > 0 && (
                        <td className='longcol'>
                            <p>{callTime(item.time)}</p>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    );
}
 
export default TableBody;