import React from 'react'
// default means its the main/only export
export default function Box(props) {
    return(
        <div
        style = {{
            backgroundColor: props.color,
            height: 30,
            width: 30
        }}
        ></div>
    )
   
}