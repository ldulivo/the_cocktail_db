import React from 'react';
import { Link } from 'react-router-dom';

import playIcon from './icons8-circled-play-48.png';

const Cards = ({ styles='', cards_shadow, item, backto }) => {
  
  return (
    <div className={`cards${cards_shadow}`}>
        <div className={`cards_content ${styles}`}>
          <main className={`cards_main${styles}`}>
            <Link to={`/cocktail/${item.idDrink}?backto=${backto}`}>
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                className="cards_img"
              />

              {
                item.strVideo === null || item.strVideo === undefined
                  ? null
                  : <img 
                      src={playIcon} 
                      alt="movie content" 
                      className='cards_play'
                    />
              }
            </Link>
          </main>
        </div>
    </div>
  )
}

export default Cards