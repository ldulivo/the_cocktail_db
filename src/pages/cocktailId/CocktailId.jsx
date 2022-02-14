import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';


import Section from '../../components/section/Section';

import { useDispatch, useSelector } from 'react-redux';
import { getByIdCocktail } from '../../redux/cocktailDucks';

import { allIngredients } from '../../helpers/utils';
import Ingredient from '../../components/ingredient/Ingredient';
import BackTo from '../../components/backTo/BackTo';

const CocktailId = () => {
    const params = useParams();
    const id = params?.id;
    let ingredients = [];


    const location = useLocation()
    const backto = location.search.substr(8)

    /* Redux */
    const dispatch = useDispatch();
    const onlyCocktail = useSelector( store => store.cocktail.getId)

    useEffect( () => {
        dispatch( getByIdCocktail(id) )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //console.log(onlyCocktail);

    if ( onlyCocktail !== 0 ) {
        ingredients = allIngredients(onlyCocktail);
        //console.log(ingredients);
    }

  return (
    <div className='cocktailId'>
        <Section styles={"black section_top"}>
            <BackTo backto={backto} />
        </Section>

        <Section className="cocktailId_header" styles={"dark section_top center"}>
            <h1>{onlyCocktail.strDrink}</h1>
            <img src={onlyCocktail.strDrinkThumb} alt={onlyCocktail.strDrink} className='cocktailId_bottom cocktailId_img' />
        </Section>
        
        <Section className="cocktailId_ingredient" styles={"black section_top center"}>
            <h2>Ingredient</h2>
            <ul className="cocktailId_ingredients">
                {
                    ingredients.length === 0
                    ? null
                    : ingredients.map( item => 
                        <li key={item} >
                            <Link 
                                to={`/list-ingredients/${item}?backto=/`}
                            >
                                <Ingredient item={item} />
                            </Link>
                        </li> )
                }
            </ul>
        </Section>

        <Section className="cocktailId_instructions" styles={"water section_top center"}>
            <h2 className='cocktailId_h2'>Instructions</h2>
            <p className='cocktailId_bottom'>{onlyCocktail.strInstructions}</p>
        </Section>

        <Section className="cocktailId_video" styles={"dark section_top center"}>
            {
                onlyCocktail.strVideo === null
                ? null
                : 
                    <>
                        <h2 className='cocktailId_h2'>Video</h2>
                        <ReactPlayer
                            className='cocktailId_bottom' 
                            url={onlyCocktail.strVideo}
                            width={'100%'}
                        />
                    </>
                
            }
        </Section>
    </div>
  )
}

export default CocktailId