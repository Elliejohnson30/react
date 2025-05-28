import React from 'react'
import InfoComponent from './InfoComponent';
import Box from './Box';
// default means its the main/only export
export default function App() {
    // this is javascript
    const name = "Ellie";
    const favFood = "Bread";
    const x = 1;
    const y = 2;
    const colors = ["green", "black", "pink",];
    


    // inside return is HTML
    return (
        <div>
            {/* {} {is JS mode} */}
            <p>{ x + y + 10}</p>
            <p>x + y + 10</p>
            <InfoComponent
            name={name}
            favFood={favFood}
            />
            <Box
            color= "blue"
            />
            <Box
            color="green"
            />
            <Box
            color ="red"
            />
            
            {/* <h4> name favorite Food is favFood</h4>
            <h4>{name} favorite food is {favFood}</h4>
            <p> I learn software development and I like Volleyball.</p> */}

        </div>


    )


}