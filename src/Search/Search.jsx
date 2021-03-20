import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => {

  let searchText;
  let searchName;
  let searchHighABV;

  
  // This is the function that gets the list of beers from the API
    const searchBeers = () => { 
    fetch(`https://api.punkapi.com/v2/beers${searchText}`)
    .then((response) => response.json())
    .then((response) => {
    return props.setBeersList(response)
    })
  }
  

  // This is the function that compiles the search string
  const onClickHandler = (event) => {
    const inputBox = document.getElementById('searchInput');
    const checkBoxHighABV = document.getElementById('HighABV')
    if (inputBox.value === '') {
      // no search parmeters //
      // set searchText string to empty //
      searchName = '';
    } else {
      // we have search parameters //
      // construct searchText string //
      searchName=`?beer_name=${inputBox.value}`;
      console.log(`Search.jsx inputBox.value ${inputBox.value}`)
    }
    searchText = searchName;
    
    if (checkBoxHighABV.checked) {
      searchHighABV = `abv_gt=6`
    } else {
      searchHighABV = ''
    }

console.log(`Between searchName and checkBoxHighABV ${searchText}`);

    if (searchHighABV !== '') {
      if (searchText !=='') {
        searchText = `${searchText}&${searchHighABV}`
      } else {
        searchText = `?${searchHighABV}`
      }
    }
    console.log(`After searchName and checkBoxHighABV ${searchText}`);
    // console.log(document.getElementById('ssss').checked);
    //searchText = searchName;
    searchBeers();
  }

  
  //This is the display element returned by the function
  return (
    <div className={styles.main}>
      <h2>Hello I'm the search element</h2>
      {/* <label htmlFor="searchInput">Search</label> */}
      <input id='searchInput' type="text" />
      <button onClick={onClickHandler}>Search</button>
      <br/>
      <br/>
      <br/>
      <label htmlFor='HighABV'>High ABV (&gt; 6.0%)</label>
      <input type="checkbox" id='HighABV'/>
      {/* <input type='checkbox' id='ssss' defaultChecked/> */}
    </div>
  )
}

export default Search
