import React from 'react';
import styles from './Beers.module.scss';
import OneBeer from './OneBeer';
import CardList from '../CardList';

const Beers = (props) => {
  const beersList = props.beersList;

  console.log(`Count beers: ${beersList.length}`);
  
  const listBeers = beersList.map((beer) => {
    // console.log(`  ${beer.name}`);
    return <OneBeer key={beer.id} beer={beer} />
    // <li>{beer.name}</li>
   } );

  return (
    <div className={styles.main}>
      <h3>Which beer would you like to try?</h3>

      
      {beersList.length > 0 
        ? <>
        <h3>Count beers: {beersList.length}</h3>
        <CardList beersList={beersList}/>

        <ul>
          {listBeers}
        </ul>
        </>
        // <OneBeer oneBeer={props.beersList[0]}/> 
        : <><p>Sorry, there are no beers that match your criteria <br />
        Please try searching again</p>
        <img className={styles.emptyGlass} src="beerGlass.gif" alt="Empty Beer Glass"/>
        </>
      }

    </div>
  )
}

export default Beers
