import React from 'react'

const Ingredient = ({ item }) => {
  return (
    <div className='ingredient'>
        <img src={`https://www.thecocktaildb.com/images/ingredients/${item}-Small.png`} alt="" />
        <h3>{item}</h3>
    </div>
  )
}

export default Ingredient