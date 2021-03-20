import React from 'react';
import styles from './OneBeer.module.scss';

const OneBeer = (props) => {
  const beer = props.beer;
  return (
    <div className={styles.main}>
      {beer.name} <br/>
      {beer.tagline} <br/>
      Strength: {beer.abv} <br/>
      Description: {beer.description} <br/>

    </div>
  )
}

export default OneBeer
