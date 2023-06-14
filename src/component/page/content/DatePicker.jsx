import React, { useState } from "react"
import "./index.css"
import requestDate from "../../../utils/requestDate"
import { useDispatch } from "react-redux"
import { loadCalls, loadCallsPeriod } from "../../../store/calls"
import dayCorrector from "../../../utils/dayCorrector"
import periodChecker from "../../../utils/periodChecker"

const DatePicker = () => {
    const dispatch = useDispatch()
    const [days, setDays] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    function handleOpenDropdown() {
        setIsOpen(!isOpen)
    }
    function handleIncrement() {
        setDays((prevState) => (prevState += 1))
        const period = requestDate(days)
        dispatch(loadCalls(period))
    }
    function handleDecrement() {
        if (days > 1) {
            setDays((prevState) => (prevState -= 1))
            const period = requestDate(days - 2)
            dispatch(loadCalls(period))
        }
    }
    function handleSetInterval(target) {
        const interval = Number(target.target.className.slice(0, 3))
        setDays(interval)
        const period = requestDate(interval - 1)
        dispatch(loadCalls(period))
        setIsOpen(false)
    }
    function handlePersonalInterval() {
        const dateFrom = document.querySelector(".datefrom")
        const dateTo = document.querySelector(".dateto")
        const periodValid = periodChecker(dateFrom.value, dateTo.value)
        if (dateFrom.value && dateTo.value && periodValid) {
            dispatch(loadCallsPeriod(dateFrom.value, dateTo.value))
        }
    }
    function handleMark(target) {
        const element = document.querySelector(`#${target.target.id}`)
        element.classList.add("markedpoint")
    }
    function handleRemoveMark(target) {
        const element = document.querySelector(`#${target.target.id}`)
        element.classList.remove("markedpoint")
    }
    document.addEventListener("mousedown", (e) => {
        const menu = document.querySelector("#datedrop")
        if (isOpen && menu && !menu.contains(e.target)) {
            setIsOpen(false)
        }
    })
    return (
        <div className="datepicker">
            <div className="frame">
                <img
                    className="arrows"
                    src="/img/arrowleft.png"
                    alt="arrow"
                    onClick={handleDecrement}
                />
                <img
                    className="calendar"
                    src="/img/icon-calendar.png"
                    alt="calendar"
                />
                <p
                    className="frametext arrows"
                    onClick={handleOpenDropdown}
                >{`${days} ${dayCorrector(days)}`}</p>
                {isOpen && (
                    <div className="dropdown datedrop" id="datedrop">
                        <p
                            className="07 droppoint"
                            id="week"
                            onClick={handleSetInterval}
                            onMouseOver={handleMark}
                            onMouseLeave={handleRemoveMark}
                        >
                            Неделя
                        </p>
                        <p
                            className="30 droppoint"
                            id="month"
                            onClick={handleSetInterval}
                            onMouseOver={handleMark}
                            onMouseLeave={handleRemoveMark}
                        >
                            Месяц
                        </p>
                        <p
                            className="365 droppoint"
                            id="year"
                            onClick={handleSetInterval}
                            onMouseOver={handleMark}
                            onMouseLeave={handleRemoveMark}
                        >
                            Год
                        </p>
                        <p>Указать даты</p>
                        <input
                            className="datefrom"
                            type="date"
                            onChange={handlePersonalInterval}
                        />
                        <input
                            className="dateto"
                            type="date"
                            onChange={handlePersonalInterval}
                        />
                    </div>
                )}
                <img
                    className="arrows"
                    src="/img/arrowright.png"
                    alt="arrow"
                    onClick={handleIncrement}
                />
            </div>
        </div>
    )
}

export default DatePicker
