import React, { useState } from 'react'
import Alert from './Alert';
//baically useState is a hook imported from react. It basically returns any array.
//text is a variable and setText is a function. Whenever u need to update text we should call setText and update through it.
//note that directly we cant assign some value to text. As it belongs to state. 
//instead can do like this :setText("New value") 
export default function TextForm(props) {
    const [text, setText] = useState();
    const [msg, collectmsg] = useState(null);
    const capsClick = () => {
        let textnew = text.toUpperCase();
        setText(textnew);
        collectmsg("Converted to Uppercase");
    }
    const smallClick = () => {
        let textnew1 = text.toLowerCase();
        setText(textnew1);
        collectmsg("Converted to lowercase");
    }
    const pascalClick = () => {
        let textnew2 = text.split(" ");
        let textbunch = "";
        for (let x in textnew2) {
            textnew2[x] = textnew2[x].trim();
            textnew2[x] = textnew2[x].replace(textnew2[x].charAt(0), textnew2[x].charAt(0).toUpperCase());
            textbunch += textnew2[x];
        }
        setText(textbunch);
        collectmsg("Converted to pascalcase");
        noofword("1");
    }
    const snakeClick = () => {
        let aray=text.split(" ");
        setText(aray.join("_"));
        collectmsg("Converted to snakecase");
        noofword("1");
    }
    const camelClick = () => {
        let textnew4 = text.split(" ");
        let textb = "";
        for (let x in textnew4) {
            textnew4[x] = textnew4[x].trim();
            textnew4[x] = textnew4[x].replace(textnew4[x].charAt(0), textnew4[x].charAt(0).toUpperCase());
            textb += textnew4[x];
        }
        setText(textb.replace(textb.charAt(0), textb.charAt(0).toLowerCase()));
        collectmsg("Converted to camelCase");
        noofword("1");
    }
    const copyText = () => {
        let x = document.getElementById("myBox");
        x.select();//to select all content when button clicked
        navigator.clipboard.writeText(x.value);//to write the content into the clipboard
        collectmsg("Copied to clipboard");
    }
    const rmvxtraspc = () => {
        let arrxyz = text.split(/[ ]+/);
        setText(arrxyz.join(" "));
        collectmsg("Removed extra space");
    }
    const emptyBox = () => {
        let textnew5 = "";
        setText(textnew5);
        noofword("0");
    }
    const [w, noofword] = useState(0);

    const chang = (event) => {
        setText(event.target.value);//to add the new value(append in textarea)
        let ar1 = text.split(/\s+/);
        let x = ar1.length;
        noofword(x);
    }

    setTimeout(() => { collectmsg(null) }, 2500);
    return (
        <>
            <div className="container m-150" style={props.mystyle}>
                <Alert alert={msg} />
                <h1>{props.heading}</h1>
                <br /><br />
                <p>Welcome to our website! Add the sentence in the textarea below and click the button....phew!!!</p>
                <br />
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={chang} style={props.mystyle.color === "#111f3f" ? { backgroundColor: "grey" } : { backgroundColor: "white" }}></textarea>
                </div>
                <button className="btn btn-warning m-3" onClick={capsClick}>Convert to UPPERCASE</button>
                <button className="btn btn-secondary m-3" onClick={smallClick}>Convert to lowercase</button>
                <button className="btn btn-info m-3" onClick={camelClick}>Convert to camelCase</button>
                <button className="btn btn-success m-3" onClick={pascalClick}>Convert to PascalCase</button>
                <button className="btn btn-primary m-3" onClick={snakeClick}>Convert to snake_case</button>
                <button className="btn btn-info m-3" onClick={copyText}>Copy Text</button>
                <button className="btn btn-light m-3" onClick={rmvxtraspc}>Remove Extra Space</button>
                <button className="btn m-3 btn-danger" onClick={emptyBox}>Delete All</button>
                <br /><br />
                {/* <span>Your sentence has {text.length} characters and  {text.split(" ").length-1} words</span> */}
                <br /><br />
                <p>Details:</p>
                <p>The text contains {w} words.</p>
            </div>
        </>
    )
}