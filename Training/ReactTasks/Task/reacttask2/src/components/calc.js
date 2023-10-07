import { Circle }  from './icons'
import { Sun } from './themePic'
import { Moon } from './themePic'
import './lightStyle.css'
import Numpad from './numPad'
import React, { useState } from 'react';

function Calculator() {
    const [isSun, setIsSun] = useState(true);
    // const [cardClass, setCardClass] = useState('card-light');
  
    const toggleTheme = () => {
        setIsSun((prevIsSun) => !prevIsSun)
    }
    const cardClass = isSun ? 'card-light' : 'card-dark';
  
    return (
      <div className={`card rounded-5 w-25 h-75  d-flex flex-column ${cardClass}`}>
        <div className="ms-4 me-4 d-flex align-items-center" style={{ height: '40px' }}>
          <Circle />
          {isSun ? <Sun onClick={toggleTheme} /> : <Moon onClick={toggleTheme} />}
        </div>
        <div className='d-flex justify-content-center mt-auto h-50'>
            <Numpad isSun={isSun}/>
        </div>
      </div>
    );
}
export default Calculator