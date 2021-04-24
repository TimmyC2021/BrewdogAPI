import React from 'react';
import styles from './CardFront.module.scss';

const CardFront = (props) => {

  const beer=props.beer;

  return (
    <div className={styles.cardFront}>
      {/* <h1>Card Front</h1> */}
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
    </div>
  )
}

export default CardFront;