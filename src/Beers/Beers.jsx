import React from 'react';
import styles from './Beers.module.scss';
import OneBeer from './OneBeer';

const Beers = (props) => {
  const beersList = props.beersList;

  console.log(beersList.length);
  
  const listBeers = beersList.map((beer) => {
    // console.log('Inside List Beers');
    console.log(`  ${beer.name}`);
    return <OneBeer beer={beer} />
    // <li>{beer.name}</li>
   } );

  return (
    <div className={styles.main}>
      <h3>Which beer would you like to try?</h3>

      {beersList.length > 0 
        ? <ul>
          {listBeers}
        </ul>
        // <OneBeer oneBeer={props.beersList[0]}/> 
        : <p>Sorry, there are no beers that match your criteria <br />
        Please try searching again</p>
      }

    </div>
  )
}

export default Beers
