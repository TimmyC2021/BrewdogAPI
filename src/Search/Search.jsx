import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => {

  const onChangeHandler = (event) => {
    if (event.target.value === '') {
      // no search parmeters
      // set searchText string to empty
      props.setSearchText('');
      // console.log('Empty')
    } else {
      // we have search parameters
      // construct searchText string
      props.setSearchText(`?beer_name=${event.target.value}`);
      console.log(`Search.jsx event.target.value ${event.target.value}`)
    }
    props.search();
  }

  return (
    <div className={styles.main}>
      <h2>Hello I'm the search element</h2>
      <label htmlFor="searchInput">Search</label>
      <input id='searchInput' type="text" onChange={onChangeHandler}/>
    </div>
  )
}

export default Search
