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
                        <img className='arrows' src="/img/opennarrow.png" alt="openarrow" onClick={handleOpenDropdown}/>
                    </p>
                    {isOpen && (
                        <div className='typedrop'>
                            <p className='droppoint' id="Входящие" onClick={handleChooseType}>Входящие</p>
                            <p className='droppoint' id="Исходящие" onClick={handleChooseType}>Исходящие</p>
                            <p className='droppoint' id="Все типы" onClick={handleChooseType}>Все типы</p>
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