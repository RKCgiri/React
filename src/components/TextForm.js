import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    // Convert text to uppercase
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    // Convert text to lowercase
    const handleLowClick = () => {
        setText(text.toLowerCase());
    };

    // Clear all text
    const handleClear = () => {
        setText('');
    };

    // Update text as user types
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Copy text to clipboard with fallback for older browsers
    const handleCopy = () => {
        if (!text.trim()) {
            alert('No text to copy!');
            return;
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => alert('Text copied to clipboard!'))
                .catch(err => console.error('Failed to copy text:', err));
        } else {
            // Fallback method for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Text copied (fallback method used)');
        }
    };

    // Remove extra spaces (leading, trailing, and multiple spaces between words)
    const handleSpace = () => {
        let newText = text.trim().split(/[ ]+/).join(" ");
        setText(newText);
    };

    // Word count (filter out empty words caused by extra spaces)
    const wordCount = text.trim().split(/\s+/).filter((element) => element.length !== 0).length;

    // Character count excluding spaces
    const charCountWithoutSpaces = text.replace(/\s+/g, '').length;

    // Estimated reading time (200 words per minute)
    const readingTime = (wordCount / 200).toFixed(2);

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                        id="myBox"
                        rows="9"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear All</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleSpace}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }}>
                <h1>Text Summary</h1>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{charCountWithoutSpaces} characters (excluding spaces)</p>
                <p>{readingTime} minutes to read</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    );
}
