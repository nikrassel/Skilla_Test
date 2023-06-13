import React, { useState } from 'react';
import "./index.css"

const Filters = ({ type, onChange}) => {
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
    return (
        <div className='filtersrow'>
            <div className='search'>
                <img className='searchicon' src="/img/search.png" alt="searchicon" />
                <p className='searchplaceholed'>
                    Поиск по звонкам
                </p>
            </div>
            <div className='filtersline'>
                <div className='filtercomponent'>
                    <p className='filtertext arrows' onClick={handleOpenDropdown}>
                        {type}
                        <img className='arrows' src={isOpen ? "/img/arrowup.png" : "/img/opennarrow.png"} alt="openarrow" onClick={handleOpenDropdown}/>
                    </p>
                    {isOpen && (
                        <div className='dropdown typedrop' id='typedrop'>
                            <p className='droppoint' id="incoming" onClick={handleChooseType} onMouseOver={handleMark} onMouseLeave={handleRemoveMark}>Входящие</p>
                            <p className='droppoint' id="outcoming" onClick={handleChooseType} onMouseOver={handleMark} onMouseLeave={handleRemoveMark}>Исходящие</p>
                            <p className='droppoint' id="allTypes" onClick={handleChooseType} onMouseOver={handleMark} onMouseLeave={handleRemoveMark}>Все типы</p>
                        </div>
                    )}
                </div>
                <div className='filtercomponent'>
                    <p className='filtertext'>
                        Все сотрудники
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className='filtercomponent'>
                    <p className='filtertext'>
                        Все звонки
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className='filtercomponent'>
                    <p className='filtertext'>
                        Все источники
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className='filtercomponent'>
                    <p className='filtertext'>
                        Все оценки
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
                <div className='filtercomponent'>
                    <p className='filtertext'>
                        Все ошибки
                        <img src="/img/opennarrow.png" alt="openarrow" />
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Filters;