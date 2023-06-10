import React from 'react';
import "./index.css"
import DateToday from './dateToday';

const Header = () => {
    return (
        <div className='headerbody'>
            <DateToday />
        </div>
    );
}
 
export default Header;