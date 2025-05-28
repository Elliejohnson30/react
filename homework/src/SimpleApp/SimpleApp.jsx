import React from 'react'
// default means its the main/only export
import InfoComponent from './InfoComponent';

export default function App(props) {
const name= "Ellie";
const numOfCats = 1;
const hobbies = "I love playing volleyball and hiking"


 return (
   <div>
    <InfoComponent
    name={name}
    numOfCats={numOfCats}
    hobbies={hobbies}
    />
   </div>
 )
}