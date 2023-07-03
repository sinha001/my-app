import React from 'react';
import { useState } from 'react';


 function TextArea(props) {
    
    const handleUpChange = () =>{
       // console.log("UpperCase"+text);
        let newText = text.toUpperCase();
        setText(newText)
       // console.log('button is clicked')
    }

    const handleLoChange = () =>{
      // console.log("Lowercase"+text);
       let newText = text.toLowerCase();
       setText(newText)
      // console.log('button is clicked')
   }

   const handleCapFLChange = () => {
      let words = text.split(". ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); 
      }
      words = words.join(". ");
      setText(words);
   }

   const handleClearChange = ()=>{
    let newText = "";
    setText(newText);
   }
  

    const handleOnChange = (event) =>{
       // console.log('On change')
        setText(event.target.value)
    }

   

    const [text,setText] = useState('');
    

  return (

    <>
    <div className='container'>
        
        <h1>
            {props.heading}
        </h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Do some Changes without rewriting the whole sentence..</label>
        <textarea className="form-control" id="myBox" value={text} onChange = {handleOnChange} rows="9"></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleUpChange}>To UpperCase</button>
        <button className="btn btn-danger mx-1" onClick={handleLoChange}>To LowerCase</button>
        <button className="btn btn-danger mx-1" onClick={handleClearChange}>Clear Text</button>
        <button className="btn btn-danger mx-1" onClick={handleCapFLChange}>Captialize first letter after '.'</button>
    </div>

    <div className='container my-5'>
      <h2>Your text summary...</h2>
      <p>{text.split(" ").length} words, {text.length} characters present..</p>
      <p>{0.008 * text.split(" ").length} reading minutes </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
};



export default TextArea;
