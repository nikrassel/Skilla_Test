import React, { useState } from "react"
import "./index.css"
import Balance from "./balance"
import DatePicker from "./DatePicker"
import Filters from "./filters"
import Calls from "../main/calls"
import { useSelector } from "react-redux"
import { getCalls, getLoadingStatus } from "../../../store/calls"

const Content = () => {
    const calls = useSelector(getCalls())
    const callsTypes = {
        incoming: "Входящие",
        outcoming: "Исходящие",
        allTypes: "Все типы"
    }
    const loadingStatus = useSelector(getLoadingStatus())
    const [currentType, setCurrentType] = useState("Все типы")
    function handleSwitchType(value) {
        setCurrentType(callsTypes[value])
    }
    return (
        <div className="maincontent">
            <Balance />
            <DatePicker />
            <Filters type={currentType} onChange={handleSwitchType} />
            {!loadingStatus && calls ? (
                <Calls calls={calls} type={currentType} />
            ) : (
                <h2 className="loadingstatus">Loading...</h2>
            )}
        </div>
    )
}

export default Content
