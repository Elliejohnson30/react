import React, { useState } from 'react'
// default means its the main/only export but we can give nickname
export default function CalculatorApp() {
    
    // string are text, integers are numbers
    const addNumbers = (numberOne, numberTwo, numberThree) => {
        console.log("add", numberOne + numberTwo + numberThree)

    }

    const subtractNumbers = (numberOne, numberTwo, numberThree, numberFour) => {
        console.log("subtract", numberOne - numberTwo - numberThree - numberFour)

    }
    const divideNumbers = (numOne, numTwo) => {
        if (numOne === 0 || numTwo === 0) {
            console.log("can't use 0")
        } else {
            console.log("divide", numTwo / numOne);
        }


    }

    const multiplyArray = ()=> {
        // scope: things can go in, they can't go out
        const numbersArray = [3, 9, 7, 7, 2, 1, 5, 12, 99];
        // console.log(numbersArray[0] * numbersArray[1]* numbersArray[2]* numbersArray[3] * numbersArray[4])
     
        let addedArrayNumbers = 0;
        for(let index= 0; index < numbersArray.length; index++){
            const item = numbersArray[index];
            addedArrayNumbers+= item;
        
        }
    console.log(addedArrayNumbers);    
    }
    const sayHello =(hi) => {
        const names= [ "Ellie", "Jade", "Aija"]
        for (let index = 0; index < names.length; index ++ ){
            const item = names[index];
            console.log(hi + " " + item);
        }
        
    }
    let colors= [];
    const displayColors =() => {

for (let index = 0; index < colors.length; index++) {
    const item= colors[index];
    console.log(item);
}
    }
    // console.log("-------")
    colors.push("red")
    colors.push("blue")
    colors.push("yellow")
    colors.pop();

// console.log(colors);

const students= [{
    name:"Ellie",
    grade: 77,
}];


const addStudent =(nameVal, gradeVal)=>{
    students.push({name: nameVal, grade: gradeVal});
}

addStudent("Betty", 66);
addStudent("James", 80);
addStudent("Blair", 70);
console.log(students);

for (let index = 0; index < students.length ;index++) {
    const element = students[index];
    console.log(element.name + " got a grade of " + element.grade)
}
// const [displayGrade, setDisplayGrade] = useState(0);
let displayGrade = 0
const getGrade =(name) => {
    const found = students.find ((element) => element.name === name);
    console.log(found.name + " got a " + found.grade );
    displayGrade = found.grade;
}
getGrade("James");
// getGrade("Ellie");
// getGrade("Betty");


    // displayColors();
    // sayHello("welcome");
    // multiplyArray()
    // divideNumbers(3, 9); 
    // divideNumbers(3, 0);

    // addNumbers(10, 4, 11);
    // addNumbers(7, 41, 6);

    // subtractNumbers(400, 100, 100, 100);
    // subtractNumbers(100, 25, 15, 10);
    let passingStudents = [];
    console.log(passingStudents);

    const getPassingStudents= () => {
        passingStudents = students.filter(student => {
            console.log(student);
            return student.grade > 65;
        });
    }
        getPassingStudents()


    return (
        <div style={{
            color: "black"
        }}>

        {"the students grade" > 65};
        <p> the grade is {displayGrade} </p>
        <p> ------- </p>
        {passingStudents.map(object =>
            <p>{object.name} passed </p>
        )}
        </div>
    )
}
