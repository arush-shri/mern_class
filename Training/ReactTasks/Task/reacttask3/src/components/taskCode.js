import ColorCard from './colorCard'
import './taskCSS.css'
import React, { useState } from 'react';

function Code() {
    const [changedColor, Changer] = useState("wheat")
    const handleChange = (color) => {
        Changer(color);
      };
      const holderStyle = {
        backgroundColor: changedColor
      }
    return (
        <div className="card cardHolder d-flex rounded-3 shadow p-3 mb-5 rounded h-100" style={holderStyle}>
            <div className="row justify-content-between w-100">
                <div className="col">
                    <ColorCard color ="red" onClick={() => handleChange("red")} />
                </div>
                <div className="col">
                    <ColorCard color="#08fc04" onClick={() => handleChange("#08fc04")} />
                </div>
                <div className="col">
                    <ColorCard color="blue" onClick={() => handleChange("blue")} />
                </div>
                <div className="col">
                    <ColorCard color="yellow" onClick={() => handleChange("yellow")} />
                </div>
                <div className="col">
                    <ColorCard color="#ff04fc" onClick={() => handleChange("#ff04fc")} />
                </div>
                <div className="col">
                    <ColorCard color="cyan" onClick={() => handleChange("cyan")} />
                </div>
                <div className="col">
                    <ColorCard color="#ffa404" onClick={() => handleChange("#ffa404")} />
                </div>
                <div className="col">
                    <ColorCard color="purple" onClick={() => handleChange("purple")} />
                </div>
                <div className="col">
                    <ColorCard color="pink" onClick={() => handleChange("pink")} />
                </div>
                <div className="col">
                    <ColorCard color="green" onClick={() => handleChange("green")} />
                </div>
                <div className="col">
                    <ColorCard color="#ff6444" onClick={() => handleChange("#ff6444")} />
                </div>
                <div className="col">
                    <ColorCard color="#08ccd4" onClick={() => handleChange("#08ccd4")} />
                </div>
                <div className="col">
                    <ColorCard color="brown" onClick={() => handleChange("brown")} />
                </div>
                <div className="col">
                    <ColorCard color="#ff9004" onClick={() => handleChange("#ff9004")} />
                </div>
                <div className="col">
                    <ColorCard color="grey" onClick={() => handleChange("grey")} />
                </div>
                <div className="col">
                    <ColorCard color="#ffd404" onClick={() => handleChange("#ffd404")} />
                </div>
            </div>
            <p className="pTask">Pick a Color</p>
        </div>
    )
}
export default Code