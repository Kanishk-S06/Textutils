import React from 'react'

export default function About(props) {
    let myStyle={
        color: props.mode==="dark"?"white":"#08031a",
        backgroundColor: props.mode==="dark"?"#08031a":"white",
        border: '2px solid',
        borderColor: props.mode==="dark"?"white":"#08031a"

    }
    // const [myStyle,setmyStyle]=useState({
    //     color:`white`,
    //     backgroundColor:`black`,
    //     border: '1     px solid white'
    // })
    // const [mybutton,mybuttonc]=useState("Enable Dark mode")
    // const toggleStyle=()=>{
    //     if (myStyle.color=="white"){
    //         setmyStyle({
    //             color:`black`,
    //             backgroundColor:`white`,
    //             border: `1px solid black`

    //         })
    //         mybuttonc("Enable Dark mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color:`white`,
    //             backgroundColor:`black`,
    //             border: '1px solid white'

    //         })
    //         mybuttonc("Enable Light mode")
    //     }
    // }
    return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This is a tool used to analyse your text and utilise it according to your need
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               It is a free to use tool
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                It works on most of the browsers with maximum efficiency
            </div>
            </div>
        </div>
        </div>
        <div className='my-3'>
        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">{mybutton}</button> */}
        </div>
    </div>
  )
}
