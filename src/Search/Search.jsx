import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => {

  let searchText;
  let searchFilterList;
  searchFilterList = [];
  let acidResponse;
  let foodResponse;

  // This is the function that gets the list of beers from the API
    // It also applies addtional filters if required
    const searchBeers = async (searchCriteria, acidicLow, food) => { 
      const apiResponse = await fetch(`https://api.punkapi.com/v2/beers${searchCriteria}`);
      const jsonResponse = await apiResponse.json();
      acidicLow ? acidResponse = jsonResponse.filter((beer)=> beer.ph < 4) : acidResponse = jsonResponse;
      food != '' 
        ? foodResponse = acidResponse.filter((beer)=> beer.food_pairing.indexOf(food)>=0) 
        : foodResponse = acidResponse
        ;

        console.log(`foodResponse: ${foodResponse}`);
      return props.setBeersList(foodResponse)    
    }
  
  
  // Used to combine search criteria
  const combineSearchCriteria = (stringSoFar, stringToAdd) => {
    // options
      // both are empty
      // stringSoFar is empty
      // stringToAdd is empty
      // both have values
    // string if not empty must:
      // Begin with a ? 
      // Multiple parameters must have an ampersand between them

      let stringToReturn;

      if (stringSoFar==="") {
          if (stringToAdd==="") {
            // both strings empty
            stringToReturn="";
          }else{
            // stringSoFar is empty
            stringToReturn=`?${stringToAdd}`;
          }
      } else {
        if (stringToAdd==="") {
          // stringToAdd is empty
          stringToReturn=stringSoFar;
        }else{
          // both have values
          stringToReturn=`${stringSoFar}&${stringToAdd}`;
        }
      }
      return stringToReturn;
  }

  
  //Search string
  const searchName = (nameString)=> {
    // no search parmeters, set searchText string to empty //
    // we have search parameters, construct searchText string //
    return nameString==='' ? '' : `beer_name=${nameString}`;
  }

// HighABV > 6%
const searchHighABV = (isChecked) => {
  return isChecked ? `abv_gt=6`: '';
}



  // This is the function runs when Search is pressed
  const onClickHandler = (event) => {
    const inputBox = document.getElementById('searchInput');
    const checkBoxHighABV = document.getElementById('HighABV')
    const acidicLow = document.getElementById('LowPH')
    const foodInputBox = document.getElementById('foodInput');
    
    
  
    searchText="";
  
    // Construct search string for criteria to pass to API
    searchText = combineSearchCriteria(searchText,searchName(inputBox.value));
    searchText = combineSearchCriteria(searchText,searchHighABV(checkBoxHighABV.checked));

    // Construct search filters to process after API
    searchFilterList = acidicLow.checked ? (searchFilterList => [...searchFilterList,`(beer)=> beer.ph < 4.4`]) : searchFilterList;

    
    console.log(`After searchName and checkBoxHighABV ${searchText}`);

    searchBeers(searchText, acidicLow.checked, foodInputBox.value);
    // const apiBeersList = searchBeers(searchText, searchFilterList);
    // console.log(apiBeersList);
    // props.setBeersList(searchBeers());
    // props.setBeersList(response)
  }

  // let changed = false;
  
  const onChangeAnything = (event) => {
    // changed = true;
  }

  //This is the display element returned by the Search Component
  return (
    <div className={styles.mainSearch}>
      {/* <h2>Hello I'm the search element</h2> */}
      <br/>
      <label htmlFor="searchInput">Search in names </label>
      <input id='searchInput' type="text" placeholder='Name search'/>
      <br/>
      <br/>
      <span className={styles.flexBoxContainerSearch}>
      <label htmlFor='HighABV'>High ABV (&gt;6.0%)</label>
      <input onChange={onChangeAnything} type="checkbox" id='HighABV'/>
      </span>
      <br/>
      <span className={styles.flexBoxContainerSearch}>
      <label htmlFor='LowPH'>Acidic (&lt;4)</label>
      <input onChange={onChangeAnything} type="checkbox" id='LowPH'/>
      </span>
      <br/>
      <br/>
      <label htmlFor="foodInput">Search in food pairings </label>
      <input id='foodInput' type="text" placeholder='Food pairing'/>
      <br/>
      <br/>
      <button onClick={onClickHandler}>Search</button>
      
    </div>
  )
}

export default Search
