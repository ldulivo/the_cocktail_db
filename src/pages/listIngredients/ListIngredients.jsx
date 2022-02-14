import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Section from '../../components/section/Section';
import ContentsGrid from '../../components/contentsGrid/ContentsGrid';
import Cards from '../../components/cards/Cards';

/* Redux */
import { useDispatch, useSelector} from 'react-redux';
import { getForIngredients } from '../../redux/cocktailDucks';
import BackTo from '../../components/backTo/BackTo';

const ListIngredients = () => {
    const location = useLocation()
    const backto = location.search.substr(8)

    const params = useParams();
    const i = params?.i;

    /* Redux */
    const dispatch = useDispatch();
    const forIngredients = useSelector( store => store.cocktail.forIngredients )

    useEffect( () => {
        dispatch( getForIngredients(i) )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
        <Section styles={"black section_top"}>
          
          <BackTo backto={backto} />

          <h1 className='section_h1'>{i}</h1>
          <ContentsGrid stylesGrid={'contentsGrid6'}>
              {
                  forIngredients.length === 0
                  ? null
                  : forIngredients.slice(0, 36).map( item =>
                        <Cards 
                            key={item.idDrink}
                            item={item}
                            backto={location.pathname}
                        />
                    )
              }
          </ContentsGrid>
        </Section>
    </div>
  )
}

export default ListIngredients