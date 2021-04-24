import React from 'react';
import styles from './OneBeer.module.scss';

const OneBeer = (props) => {
  const beer = props.beer;
  const listFood = beer.food_pairing.map((foodItem, i) => <li key={i}>{foodItem}</li>)
  return (
    <div className={styles.main}>
      {beer.name} <br/>
      {beer.tagline} <br/>
      Strength: {beer.abv} <br/>
      Description: {beer.description} <br/>
      ph: {beer.ph} <br/>
      Food pairing(s):
      <ul>
      {listFood}
      </ul> 

    </div>
  )
}

export default OneBeer
