import React from "react"
import "./index.css"

const TableHeader = () => {
    return (
        <thead>
            <tr className="headertext">
                <th className="type">Тип</th>
                <th className="time">Время</th>
                <th className="personal">Сотрудник</th>
                <th className="number">Звонок</th>
                <th className="source">Источник</th>
                <th className="rate">Оценка</th>
                <th className="long">Длительность</th>
            </tr>
        </thead>
    )
}

export default TableHeader
