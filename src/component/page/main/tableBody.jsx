import React, { useState } from "react"
import "./index.css"
import callTime from "../../../utils/callTime"
import { useDispatch } from "react-redux"
import { loadRecord } from "../../../store/records"

const TableBody = ({ calls }) => {
    const dispatch = useDispatch()
    const [showRecord, setShowRecord] = useState("")
    function handleShowRecord(target) {
        const callId = target.target.id
        setShowRecord(callId)
    }
    function handlePlayRecord(target) {
        const recordId = target.target.id
        dispatch(loadRecord(recordId))
    }
    // function handleHideRecord() {
    //     setShowRecord("")
    // }
    return (
        <tbody>
            {calls.map((item) => (
                <tr
                    id={item.id}
                    key={item.id}
                    className="tablecontent"
                    onMouseEnter={handleShowRecord}
                >
                    <td className="typecol">
                        <img
                            src={
                                item.in_out === 1
                                    ? "/img/outcoming.png"
                                    : "/img/incoming.png"
                            }
                            alt="calltype"
                        />
                    </td>
                    <td className="timecol">
                        <p>{item.date.slice(11, 16)}</p>
                    </td>
                    {item.person_avatar && (
                        <td className="avatarcol">
                            <img src={item.person_avatar} alt="avatar" />
                        </td>
                    )}
                    <td className="numbercol">
                        <p>{item.from_number}</p>
                    </td>
                    {item.source && (
                        <td className="sourcecol">
                            <p>{item.source}</p>
                        </td>
                    )}
                    {item.record && showRecord.includes(item.id) && (
                        <td className="record">
                            <img
                                id={item.record}
                                className="playbutton"
                                src="/img/play.png"
                                alt="play"
                                onClick={handlePlayRecord}
                            />
                            <img
                                className="recordline"
                                src="/img/recordline.png"
                                alt="line"
                            />
                            <img
                                className="download"
                                src="/img/download.png"
                                alt="download"
                            />
                        </td>
                    )}
                    {item.time > 0 && (
                        <td className="longcol">
                            <p>{callTime(item.time)}</p>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody
