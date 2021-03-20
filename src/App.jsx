import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Beers from './Beers';
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
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Search setBeersList={setBeersList}/>
        <Beers beersList={beersList}/>
      </main>
    </div>
  );
}

export default App;
