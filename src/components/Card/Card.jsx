import React from 'react'
import CardFront from '../CardFront';
import CardBack from '../CardBack';
import styles from './Card.module.scss';

const Card = (props) => {

  const beer = props.beer
  return (
    <div>
      <h1>Card</h1>
      <div className={styles.front}>
        <CardFront key={`F${beer.id}`} beer={beer}/>
      </div>
      <CardBack key={`B${beer.id}`} beer={beer} />
    </div>
  )
}

export default Card
