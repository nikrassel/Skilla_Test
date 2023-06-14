import React, { useState } from "react"
import "./index.css"

const Filters = ({ type, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    function handleOpenDropdown() {
        setIsOpen(!isOpen)
    }
    function handleChooseType(target) {
        const newValue = target.target.id
        onChange(newValue)
        setIsOpen(!isOpen)
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
        const menu = document.querySelector("#typedrop")
        if (isOpen && menu && !menu.contains(e.target)) {
            setIsOpen(false)
        }
    })
    function handleCleanFilters() {
        onChange("allTypes")
    }
    return (
        <div className="filtersrow">
            <div className="search">
                <img
                    className="searchicon"
                    src="/img/search.png"
                    alt="searchicon"
                />
                <p className="searchplaceholed">Поиск по звонкам</p>
            </div>
            <div className="abortcomponent">
                {type !== "Все типы" && (
                    <div className="">
                        <p
                            className="aborttext arrows inactive"
                            onClick={handleCleanFilters}
                        >
                            Сбросить фильтры
                            <img
                                className="arrows"
                                src="/img/close.png"
                                alt="openarrow"
                                onClick={handleCleanFilters}
                            />
                        </p>
                    </div>
                )}
            </div>
            <div className="filtersline">
                <div className="filtercomponent">
                    <p
                        className={`filtertext arrows ${
                            type !== "Все типы" ? "active" : "inactive"
                        }`}
                        onClick={handleOpenDropdown}
                    >
                        {type}
                        {type !== "Все типы" ? (
                            <img
                                className="arrows"
                                src={
                                    isOpen
                                        ? "/img/arrowup.png"
                                        : "/img/activeArrowDown.png"
                                }
                                alt="openarrow"
                                onClick={handleOpenDropdown}
                            />
                        ) : (
                            <img
                                className="arrows"
                                src={
                                    isOpen
                                        ? "/img/arrowup.png"
                                        : "/img/opennarrow.png"
                                }
                                alt="openarrow"
                                onClick={handleOpenDropdown}
                            />
                        )}
                    </p>
                    {isOpen && (
                        <div className="dropdown typedrop" id="typedrop">
                            <p
                                className="droppoint"
                                id="incoming"
                                onClick={handleChooseType}
                                onMouseOver={handleMark}
                                onMouseLeave={handleRemoveMark}
                            >
                                Входящие
                            </p>
                            <p
                                className="droppoint"
                                id="outcoming"
                                onClick={handleChooseType}
                                onMouseOver={handleMark}
                                onMouseLeave={handleRemoveMark}
                            >
                                Исходящие
                            </p>
                            <p
                                className="droppoint"
                                id="allTypes"
                                onClick={handleChooseType}
                                onMouseOver={handleMark}
                                onMouseLeave={handleRemoveMark}
                            >
                                Все типы
                            </p>
                        </div>
                    )}
                </div>
                <div className="filtercomponent">
                    <p className="filtertext inactive">
                        Все сотрудники
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className="filtercomponent">
                    <p className="filtertext inactive">
                        Все звонки
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className="filtercomponent">
                    <p className="filtertext inactive">
                        Все источники
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className="filtercomponent">
                    <p className="filtertext inactive">
                        Все оценки
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className="filtercomponent">
                    <p className="filtertext inactive">
                        Все ошибки
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Filters
