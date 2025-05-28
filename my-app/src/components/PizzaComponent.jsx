export const PizzaComponent = ({
    title,
    description,
    img,
    price,
    soldOut
  })=>{
  // JSX basically HTML; Reacts version
    return (
      <div className= 'card-container'>
        <h1>{title}</h1>
        <p>{description}</p>
        {/* add an image here and description */}
        <img 
        src= {img}
         alt={title}
         style={{
          filter: soldOut=== true ? 'grayscale(100%)': null
         }}
         width="500" height="600"></img>

        <h3 className="price-container"> $ {price} </h3>
         </div>
    )
  }