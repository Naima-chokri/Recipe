import React, { useState } from 'react'

const Filter = ( {handleFilter}) => {
    const [search, setSearch] = useState("")
  return (
    <form onSubmit={(e)=> {handleFilter(e,search);
        setSearch("")
    }}>
        <input type="text" 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Enter a name for searching..."/>
    </form>
  )
}

export default Filter