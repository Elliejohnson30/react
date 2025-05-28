import React from 'react'
import {useState} from "react";
import CircleComponent from "./CircleComponent"
// default means its the main/only export
export default function App() {
    // this is just javascript
    // const []= useState(); state is a special var that can update screen
    // let step =1
    const[step, setStep]=useState(1);
    const [show, setShow]= useState(true);

    const prevHandler =() => {
        // setStep(1);
        if(step > 1) {
            setStep(step - 1);
        }
        
    }
    // create nextHandler and alert next
    // connect it to Next button
    const nextHandler =
    ()=> {
        if(step < 3) {
     setStep(step + 1);  
        }
    
    }

    if (show == false) {
        return(
            <div>
                <button
                onClick={ () =>
                     {setShow(true)}
                } 
                >X</button>
            </div>
        )
    }
    return (
<div>

<div>
    <button onClick = {
        () => { setShow (false);

         }
    }>X </button> 
    </div>


    <CircleComponent
    stateStep = {step}
    step={1}
    />

    <CircleComponent
    stateStep = {step}
    step={2}
    />
    <CircleComponent
    stateStep = {step}
    step={3}
    />

    <h3> Learn React</h3>
    <p> This is step {step}</p>
    <button onClick={prevHandler}>Prev</button>
    <button onClick={nextHandler}>Next</button>
    </div>


    )}
