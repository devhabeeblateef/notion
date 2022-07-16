import React from 'react';
import classes from './CSS/App.module.css';
function Filter({search, setSearchTerm}) {
  const filterBlue = ()=>
  {
    setSearchTerm("Blue")
  }

  const filterGreen = ()=>
  {
      setSearchTerm("Green")
  }

  const filterGrey = ()=>
  {
    setSearchTerm("Grey")
  }

  const filterRed = ()=>
  {
      setSearchTerm("Red")
  }
  const clearFilters = ()=>
  {
      setSearchTerm("")
  }
  return (
    <div className={classes.filter}>
      <button onClick={filterBlue} className='btn btn-primary'>
        Blue Aliens
      </button>
      <button onClick={filterGrey} className='btn btn-secondary'>
        Grey Aliens
      </button>
      <button onClick={filterRed} className='btn btn-danger'>
        Red Aliens
      </button>
      <button onClick={filterGreen} className='btn btn-success'>
        Green Aliens
      </button> <br/>
      <button onClick={clearFilters} className='btn btn-outline-success'>
        Clear Filters
      </button>
    </div>
  )
}

export default Filter
