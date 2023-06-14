import React from "react"
import "./index.css"

const Balance = () => {
    return (
        <div className="balance">
            <p className="balancetext">
                Баланс: <span className="markedtext">272 Р</span>
            </p>
            <img
                className="balanceadd"
                src="/img/addBalance.png"
                alt="addButton"
            />
        </div>
    )
}

export default Balance
