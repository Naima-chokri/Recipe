import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Details.css"

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
    console.log(oneRec)

  return (
    <div>
        {loading ? <h1>Loading...</h1> :
        <div> 
          <div className="wrapper">
            <div className="product-img">
              <img src={oneRec.recipe.image} height={450} width={425} />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{oneRec.recipe.label}</h1>
                <h2>{oneRec.recipe.cuisineType}</h2>
                <p>{oneRec.recipe.ingredientLines}</p>
              </div>
              <div className="product-price-btn">
                <button type="button">Order Ingredients</button>
              </div>
            </div>
        </div>
      </div>}
    </div>
  )
}

export default Details