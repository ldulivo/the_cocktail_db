import React, { useEffect } from 'react'

/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getCocktails, getRandom, getListIngredients } from '../../redux/cocktailDucks';

/* Components */
import Cards from '../../components/cards/Cards';
import ContentsGrid from '../../components/contentsGrid/ContentsGrid';
import Section from '../../components/section/Section';
import Water from '../../components/water/Water';

/* Helpers */
import { widthScreen, hexa } from '../../helpers/screen';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    const wScreen = widthScreen();
    const itemHexa = hexa(wScreen);
    
    /* Redux */
    const dispatch = useDispatch();
    const cocktailRandom = useSelector( store => store.cocktail.random );
    const cocktails = useSelector( store => store.cocktail.cocktails );
    const ordinaryDrinks = useSelector( store => store.cocktail.ordinaryDrinks );
    const listIngredients = useSelector( store => store.cocktail.listIngredients )

    useEffect( () => {
        dispatch( getRandom(itemHexa) );
        dispatch( getCocktails('Cocktail') );
        dispatch( getCocktails('Ordinary_Drink') );
        dispatch( getListIngredients() );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

  return (
    <>
        <Section styles={"black section_padding_top"}>
          <h1 className='section_title'>Cocktail</h1>
        </Section>

        <Section styles={"water section_height_525"}>
          <Water />
            <ContentsGrid stylesGrid={`contentsGrid_${itemHexa}`} >
                    {
                        cocktailRandom.length === 0
                            ? null
                            : cocktailRandom.map( item =>
                                <Cards
                                    key={item[0].idDrink}
                                    cards_shadow={'_shadow'}
                                    styles={'cards_hexagon'}
                                    item={item[0]}
                                    backto={location.pathname}
                                />
                            )
                    }
            </ContentsGrid>
        </Section>

        <Section styles={"black section_top"}>
          <h1 className='section_h1'>Cocktails</h1>
          <ContentsGrid stylesGrid={'contentsGrid6'}>
              {
                  cocktails.length === 0
                  ? null
                  : cocktails.slice(0, 12).map( item =>
                        <Cards 
                            key={item.idDrink}
                            item={item}
                            backto={location.pathname}
                        />
                    )
              }
          </ContentsGrid>
        </Section>

        <Section styles={"water section_top section_bottom section_padding_top section_padding_bottom"}>
        <h1 className='section_h1'>Not Cocktails</h1>
        <ContentsGrid stylesGrid={'contentsGrid6'}>
            {
                ordinaryDrinks.length === 0
                ? null
                : ordinaryDrinks.slice(0, 12).map( item =>
                        <Cards 
                            key={item.idDrink}
                            item={item}
                            backto={location.pathname}
                        />
                    )
            }
        </ContentsGrid>
        </Section>

        <Section styles={"dark"}>
            <h1 className='section_h1'>Ingredients</h1>
            <ul className='home_ul'>
                {
                    listIngredients.length === 0
                    ? null
                    : listIngredients.map( item => 
                        <li key={item.strIngredient1}>
                            <Link 
                                to={`/list-ingredients/${item.strIngredient1}?backto=${location.pathname}`}
                            >
                                {item.strIngredient1}
                            </Link>
                        </li>)
                }
            </ul>
        </Section>
    </>
  )
}

export default Home