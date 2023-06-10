import React from 'react';
import "./index.css"

const SideBar = () => {
    const navigation = ["Итоги", "Заказы", "Сообщения", "Звонки", "Контакты", "Документы", "Исполнители", "Отчеты", "База знаний", "Настройки"]
    return (
        <div className='sidebar-zone'>
            <div className='sidebar-body'>
                <img className='logo' src="/img/logo.png" alt="logo" />
                <ul className='menu'>
                    {navigation.map((item) => (
                        item === "Звонки" 
                        ? (
                            <li className='current' key={item}>
                                <img className='itemimg' src={`/img/${item}.png`} alt="navigate" />
                                <p className='itemtext'>
                                    {item}
                                </p>
                                <img className='point' src="/img/new.png" alt="point" />
                            </li>
                        ) : (
                            <li className='menuitem'>
                                <img className='itemimg' src={`/img/${item}.png`} alt="navigate" />
                                <p className='itemtext'>
                                    {item}
                                </p>
                            </li>
                        )
                    ))}
                </ul>
                <button className='addorder'>
                    <p className='buttotext'>
                        Добавить заказ
                    </p>
                    <img className='buttonelement' src="/img/addButton.png" alt="addButton" />
                </button>
                <button className='paybutton'>
                    <p className='buttotext'>
                        Оплата
                    </p>
                    <img className='buttonelement' src="/img/payment.png" alt="addButton" />
                </button>
            </div>
        </div>
    );
}
 
export default SideBar;
