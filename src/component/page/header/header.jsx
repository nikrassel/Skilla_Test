import React from "react"
import "./index.css"
import DateToday from "./dateToday"
import CallsAnalytics from "./callsAnalytics"

const Header = () => {
    return (
        <div className="headerbody">
            <DateToday />
            <CallsAnalytics />
            <img className="searchuser" src="/img/search.png" alt="search" />
            <div className="user">ИП Сидорова Александра Михайловна</div>
            <img className="openarrow" src="/img/opennarrow.png" alt="open" />
            <div className="avatar">
                <img
                    className="avatarimage"
                    src="/img/avatar.png"
                    alt="avatar"
                />
                <img
                    className="downarrow"
                    src="/img/opennarrow.png"
                    alt="open"
                />
            </div>
        </div>
    )
}

export default Header
