import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Details = () => {
   const {id} =useParams()
   const [oneRec, setOneRec] = useState({})
   const [loading, setLoading] = useState(true)

   const getOneReceipece = async() => {
    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=f7fa73ea&app_key=f47428487106d7136a9ecc3ad772e18c`);
     setOneRec(response.data)
     setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getOneReceipece()
    }, 
    [])

  return (
    <div>
        {loading ? <h1>Loading...</h1> :<div>
        
        {oneRec.recipe.label}</div>}
    </div>
  )
}

export default Details