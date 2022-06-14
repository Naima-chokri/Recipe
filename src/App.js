
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
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
      <Routes>
        <Route path='/' element= { <div> <Filter handleFilter={handleFilter}/>
                {loading ? <h1>Loading...</h1> :
               <List listOfRecette={listOfRecette}/>}</div>} />
        <Route path='/details/:id' element= {<Details />} />
      </Routes>
    </div>
  );
}

export default App;
