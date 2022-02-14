import React from 'react'
import { Link } from 'react-router-dom'
import arrow_left from './arrow_left.svg'
import home from './icons8-home.svg'

const BackTo = ({ backto }) => {
  return (
    <div className='backTo'>
      {
        backto === '/' || backto === ''
          ? null
          : <Link to={backto}>
              <img src={arrow_left} alt="back to" /> Back
            </Link>

      }
      
      <Link to={'/'}>
        <img src={home} alt="back to home" />
      </Link>
    </div>
  )
}

export default BackTo