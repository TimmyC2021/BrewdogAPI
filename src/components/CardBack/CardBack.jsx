import React from 'react'

const CardBack = (props) => {

  const beer=props.beer;
  const listFood = beer.food_pairing.map((foodItem, i) => <li key={i}>{foodItem}</li>)
  
  return (
    <div>
      <h1>Card Back</h1>
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>Strength: {beer.abv}</p>
      <p>Description: {beer.description}</p>
      <p>ph: {beer.ph}</p>
      <ul>
        {listFood}
      </ul>
    </div>
  )
}

export default CardBack;