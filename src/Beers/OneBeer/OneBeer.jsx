import React from 'react';
import styles from './OneBeer.module.scss';

const OneBeer = (props) => {
  return (
    <div className={styles.main}>

      <h4>I'm one beer on my own</h4>
      {console.log(props.oneBeer.name)}
      {/* Beer name: {props.oneBeer} */}
    </div>
  )
}

export default OneBeer
