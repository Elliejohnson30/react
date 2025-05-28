import React from 'react'
// default means its the main/only export
export default function InfoComponent(props) {

    return(
        <div> 
        <h4> name favorite Food is favFood</h4>
        <h4>{props.name} favorite food is {props.favFood}</h4>
        <p> I learn software development and I like Volleyball.</p>
        </div> 
    )
}