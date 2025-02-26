import React,{useState} from 'react'



export default function TextForm(props) {
    const [text , setText ] = useState('');
    // text="New Text"; //wrong way to change the state
    //  setText("New Text"); //correct way
    const handelUpClick=()=>{
        // console.log("Upper Case is Clicked :"+text);
        let newText= text.toUpperCase();
        setText(newText);
    };
    const handelLowClick=()=>{
        // console.log("Upper Case is Clicked :"+text);
        let newText= text.toLowerCase();
        setText(newText);
    };
    const handelClear=()=>{
        // console.log("Upper Case is Clicked :"+text);
        let newText= '';
        setText(newText);
    };
    const handleOnChange=(event)=>{
        // console.log("Handel on change");
        setText(event.target.value);
    };
    const handelCopy=(event)=>{
        console.log("I am Coping");
        let text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };
    const handelSpace=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
            </div>
             <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
             <button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert to LowerCase</button>
             <button className="btn btn-primary mx-2" onClick={handelClear}>Clear All</button>
             <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
             <button className="btn btn-primary mx-2" onClick={handelSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" >
            <h1>Text Summery</h1>
            <p>  {text.split(" ").length} words and {text.length} charecters</p>
            <p>{ 0.009*text.split(" ").length} time taken to read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
}
