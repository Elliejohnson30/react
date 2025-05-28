import React from 'react'
// default means its the main/only export
export default function InfoComponent(props) {
 return (
   <div>
<h4>my name is {props.name}</h4>

<h4> I have {props.numOfCats} cat </h4>

<p> I love playing volleyball and hiking </p>

   </div>
 )
}
