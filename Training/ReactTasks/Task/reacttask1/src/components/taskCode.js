import React, { useState } from 'react';
function Code(){

    const countWord = () =>{
        if (text.trim() === '') {
            return 0;
          }
        var word = text.trim().split(' ')
        return word.length
    }

    const [text, setText] = useState('')
    const changed = (event) =>{
        setText(event.target.value)
    }

    return(
        <div className = "card shadow p-3 mb-5 bg-body rounded w-50">
            <textarea
            rows="4" cols="5" value={text} onChange={changed}
            />
            <p>Word count: {countWord()}</p>
        </div>
    )
}

export default Code