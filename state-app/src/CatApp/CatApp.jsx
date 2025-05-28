import React from 'react'
// default means its the main/only export

const COLORS = [
    {
        color: "purple",
    },
    {
        color: "blue",
    },
    {
        color: "red"
    },
]
const ANIMALS = {
    breed: [
        { type: "cat" },
        { type: "dog" },
        { type: "bird" },
    ]
}
const NEW_ANIMALS = [
    { type: "cat", name: " Rubio" },
    { type: "dog", name: "Wally" },
    { type: "bird", name: "Tweety" },
]

export default function CatApp() {
    // setTimeout: adds a delay, setInterval: runs every x seconds
    // console.log(COLORS);
    // console.log(COLORS[1].color);
    // console.log(COLORS[2].color);
    // console.log(ANIMALS);
    // console.log(ANIMALS.breed[1].type);
    const getAnimalName = () => {
        // console.log(NEW_ANIMALS[1].name);
        const check = NEW_ANIMALS.some((element) => {
            // check if element name is equal to tweety
            console.log(element);
            return element.name == "Tweety"
            console.log(getAnimalName);
            // code after return
        });
        console.log(check);
    }
    getAnimalName();

    // const myTimeout = setTimeout(getAnimalName, 1000);



    return (
        <div> Cats </div>

    )
}


