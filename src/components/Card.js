import React from 'react'
import "./Card.css"

const Card = ({item}) => {
  return (
<div className="card-container">
  <div className="card u-clearfix">
    <div className="card-body">
      <span className="card-number card-circle subtle">01</span>
      <span className="card-author subtle">John Smith</span>
      <h2 className="card-title">{item.recipe.label}</h2>
      <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
      <div className="card-read">Read</div>
      <span className="card-tag card-circle subtle">C</span>
    </div>
    <img src={item.recipe.image} alt="" className="card-media" />
  </div>
  <div className="card-shadow" />
</div>

  )
}

export default Card