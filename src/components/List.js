import React from 'react'
import Card from './Card'

const List = ({listOfRecette}) => {
  return (
    <div>{listOfRecette.map((item) => <Card item={item} key={item.recipe.uri.slice(("51"))}/>)}</div>
  )
}

export default List