
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import List from './components/List';

function App() {
  const [listOfRecette, setListOfRecette] = useState([])
  const [loading, setLoading] = useState(true)
  const [querry, setQuerry] = useState("pizza")

  const getReceipece = async() => {
    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${querry}&app_id=f7fa73ea&app_key=f47428487106d7136a9ecc3ad772e18c`);
      setListOfRecette(response.data.hits);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
  getReceipece()
  }, // eslint-disable-next-line
  [querry])
  
const handleFilter = (e,search) => { 
  e.preventDefault()
  setQuerry(search)
}
  return (
    <div className="App">
      <Filter handleFilter={handleFilter}/>
      {loading ? <h1>Loading...</h1> :
<List listOfRecette={listOfRecette}/>}
    </div>
  );
}

export default App;
