export const Footer=() =>{ 
    // get today date
   
    const today= new Date(); 
    // will format to a human readable version
const formattedDate = today.toLocaleString("en-US",{
timeZone: "America/Chicago"

}
    
);
const openingTime= 9;
const closingTime= 18;
const isOpen= today.getHours() >= openingTime && today.getHours() <= closingTime;
// components are functions with props and jsx(HTML +35); props
// Regular function
const orderHandler =() => {
   alert("Hello World!");
} 
// const test = true;  
//    if (test == true) {
//       return <p>test</p>
//    }

// if statement


//  create a variable called test and make it true; boolean
   // create a if statement, if test equals true return <p>test<p>
//  to use js in html{}
return (
        <div className="footer-container">

          <button
          onClick={orderHandler}
          disabled ={ isOpen ? false: true}
          style ={{
            backgroundColor: isOpen ? "blue" : "gray"  
          }}
           className= "orderButton">Order Now</button>
     <h3>Open 9am-10pm</h3>
     {/* if else; is open true "Open" else "Closed" */}
     <p> We are currently{  isOpen ? 
       <p>"Open" </p>
       : <p>"Closed"</p>
   
   }
      
    
   </p>
    </div>
    )

    }