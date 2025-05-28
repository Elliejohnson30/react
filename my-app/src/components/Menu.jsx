import { PizzaComponent } from "./PizzaComponent";
import {pizzaData} from "../data";
// "." means same folder
// "/" means down a folder
// ".."means up a folder
export const Menu = function() {
    console.log(pizzaData);

// return is html (not always)
// if(conditon){} else{}
// condition ? code:code
// if(condition)
// condition && code

    return (
        <div className="menu-container">
            <h3 className = "menu-text">Menu</h3>
            {/* for loop for arrays */}
            
            
         {
         pizzaData.length > 0 ?
          pizzaData.map(
            (pizza) => {
                return(
                <PizzaComponent
                    title={pizza.name}
                    description={pizza.ingredients}
                    img={pizza.photoName}
                    price={pizza.price}
                    soldOut={pizza.soldOut}
                    />

                )
            }
         )
         : <p>Items Coming Soon!</p>


}
         {/* <PizzaComponent
          title={pizzaData[0].name}
          description={pizzaData[0].ingredients}
          img={pizzaData[0].photoName}
          price={pizzaData[0].price}
        
          />
           <PizzaComponent
          title={pizzaData[1].name}
          description={pizzaData[1].ingredients}
          img={pizzaData[1].photoName}
          price={pizzaData[1].price}
        
          />
           <PizzaComponent
          title={pizzaData[2].name}
          description={pizzaData[2].ingredients}
          img={pizzaData[2].photoName}
          price={pizzaData[2].price}
        
          /> */}
    </div>
    )
    }