import React from 'react';
import Card from '../Card';

const CardList = (props) => {

const  beersList  = props.beersList

const listBeers = beersList.map((beer) => {
  // console.log(`  ${beer.name}`);
  return <Card key={beer.id} beer={beer} />
  // <li>{beer.name}</li>
 } );

  return (
    <section>
      <h1>Card List</h1>
        {console.log(beersList)}
        {/* {beersList.length > 0 ? */}
        <ul>
          {listBeers}
        </ul>
        {/* : `No beers`
      } */}
      
    </section>
  )
}

export default CardList
