import { Backspace } from "./icons";
function Numpad({isSun}){
    const keyPadClass = isSun ? 'keyPad-light' : 'keyPad-dark';
    return (
        <div className={`text-center rounded-bottom-5 row w-100 ${keyPadClass}`}>
            <div className="col d-flex flex-column justify-content-between mt-4">
                <p>7</p>
                <p>4</p>
                <p>1</p>
                <p>0</p>
            </div>
            <div className="col d-flex flex-column justify-content-between mt-4">
                <p>8</p>
                <p>5</p>
                <p>2</p>
                <p>.</p>
            </div>
            <div className="col d-flex flex-column justify-content-between mt-4">
                <p>9</p>
                <p>6</p>
                <p>3</p>
                <p>=</p>
            </div>
            <div className="col d-flex flex-column justify-content-between mt-3">
                <p><Backspace toggle={isSun}/></p>
                <p>÷</p>
                <p>x</p>
                <p>-</p>
                <p>+</p>
            </div>
        </div>
    )
}
export default Numpad