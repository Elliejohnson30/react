import React from 'react'


export default function InfoComponent ({
    name,
    description
}){
    return (
        <div className= 'card-container'>
        <h1>{name}</h1>
        <p>{description}</p>

        </div>
    )
}
   


   