import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleRemoveChar = ()=>{
      let newText = text.slice(0, -1);
        setText(newText)
    }
    const handleBold = ()=>{        
        let newText = text.bold();
          setText(newText)            
      } // doesn't work because of xss

    const handleItalic = ()=>{
        let newText = text.italics();
          setText(newText)
      } // doesn't work because of xss

    const handleRemoveWord = ()=>{
        let words = text.split(" ");
        words.pop()
        let newText = words.join(" ");
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here'); 
    return (
        <>
        <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn mx-1 btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn mx-1 btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn mx-1 btn-primary" onClick={handleBold}>Convert to bold</button>
            <button className="btn mx-1 btn-primary" onClick={handleItalic}>Convert to italic</button>
            <button className="btn mx-1 btn-primary" onClick={handleRemoveChar}>Remove last character</button>
            <button className="btn mx-1 btn-primary" onClick={handleRemoveWord}>Remove last word</button>
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{Math.round(0.008 * text.split(" ").length)} minutes read </p>
            <h3>Preview:</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
