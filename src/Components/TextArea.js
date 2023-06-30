import React from 'react';
import { useState } from 'react';


 function TextArea(props) {
    
    const handleUpChange = () =>{
       // console.log("UpperCase"+text);
        let newText = text.toUpperCase();
        setText(newText)
       // console.log('button is clicked')
    }

    const handleOnChange = (event) =>{
       // console.log('On change')
        setText(event.target.value)
    }

   

    const [text,setText] = useState('Enter the Text here ... ');
    

  return (
    <div>
        
        <h1>
            {props.heading}
        </h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Do some Changes without rewriting the whole sentence..</label>
        <textarea className="form-control" id="myBox" value={text} onChange = {handleOnChange} rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpChange}>To UpperCase</button>
    </div>
  );
};



export default TextArea;
