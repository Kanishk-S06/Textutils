import React,{useState} from 'react'

export default function TextForm(props) { 
  const [text,setText]=useState('')
  const handlecopy=()=>{
    let text =document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success")

  }
  const Replace=()=>{
    let str=document.getElementById("exampleFormControlTextarea1").value
    let strf=document.getElementById("exampleFormControlTextarea2").value
    let strs=document.getElementById("exampleFormControlTextarea3").value
    let arrs=str.split(" ")
    for (let i=0;i<arrs.length;i++){
      if(arrs[i]===strf){
        arrs[i]=strs
      }
    }
    let strn=arrs.join(" ")
    setText(strn)
    props.showAlert("Replaced","success")
  }

  const handleUpClick =()=>{
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showAlert("converted to uppercase","success")
  }
  const handleOnChange =(event)=>{
    setText(event.target.value)
  }
  const handleLoClick=()=>{
    setText(text.toLowerCase())
    props.showAlert("converted to lowercase","success")
  }
  const cleartext=()=>{
    setText("")
    props.showAlert("text cleared","success")
  }
  return (
    <>
    <div className='container' style={{color:props.mode===`grey`?'white':'grey'}}>

     <h1>{props.heading}</h1>
     <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{background:props.mode===`grey`?'grey':'white',color:props.mode==="grey"?"white":"grey"}} rows="4" value={text} onChange={handleOnChange} >
      </textarea>
     </div>
     <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
     <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowercase</button>
     <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={cleartext}>Clear Text</button>
     <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handlecopy}>Copy Text</button>
     <h3 className='mt-2'>Word To Be Replaced</h3>
     <div className="my-1">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" style={{background:props.mode===`grey`?'grey':'white',color:props.mode==="grey"?"white":"grey"}} id="exampleFormControlTextarea2" rows="1">
      </textarea>
     </div>
     <h3 className='mt-2'>Word Replacing</h3>
     <div className="my-1">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" style={{background:props.mode===`grey`?'grey':'white',color:props.mode==="grey"?"white":"grey"}} id="exampleFormControlTextarea3" rows="1">
      </textarea>
     </div>
     <button disabled={text.length===0}className='btn btn-primary mx-1 my-2' onClick={Replace}>Replace All</button>
    <div className='my-2'>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
      <p>{(0.008*text.split(" ").length)-0.008} Minutes read and {(0.0252*text.split(" ").length)-0.0252} Minutes write</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to Preview  "}</p>
    </div>
    </div>
    </>
  )
}
