import React from 'react';
import styles from './Beers.module.scss';
import OneBeer from './OneBeer';

const Beers = (props) => {
  return (
    <div className={styles.main}>
      <h3>I am a pub, heres to the beers</h3>
      {/* {console.log(props.results)}
      {props.results.map((oneBeer) => {
        <OneBeer oneBeer={oneBeer}/>
      })} */}
      {/* {console.log(props.results[0].name)} */}
      
      
      {props.results.length > 0 ? 
      
      // props.results.map((element) => {
      //   <OneBeer oneBeer={element} />
      // })
      <OneBeer oneBeer={props.results[0]}/> 
      
      : <p> No results</p>}
      
    </div>
  )
}

export default Beers
