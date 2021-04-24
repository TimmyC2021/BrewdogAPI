import styles from './App.css';
import Search from './components/Search';
import Beers from './components/Beers';
import { useState } from 'react';

function App() {

  const [beersList, setBeersList] = useState([]);
  // const [searchText, setSearchText] = useState('');

  // Need an API connection to get beer information

  // Want to use the Search and other criteria to filter the returned results

  // Probably a good idea to use 'useState' to retrun information


  return (
    <div className="App">
      <header className="App-header">
        <h1>Punk API</h1>
        <h3> for </h3>
        <h2>BrewDog Punk IPAs</h2>
      </header>
      <main className={styles.flexBoxContainer}>
        <Search setBeersList={setBeersList}/>
        <Beers beersList={beersList}/>
      </main>
    </div>
  );
}

export default App;
