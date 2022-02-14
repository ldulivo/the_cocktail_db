import axios from "axios";

/**
 * CONSTANT
 */
const cocktailData = {
    cocktails: [],
    ordinaryDrinks: [],
    random: [],
    getId: [],
    listIngredients: [],
    forIngredients: []
}

/**
 * TYPES
 */
const GET_COCKTAILS         = "GET_COCKTAILS";
const GET_RANDOM            = "GET_RANDOM";
const GET_ID                = "GET_ID";
const GET_LIST_INGREDIENT   = "GET_LIST_INGREDIENT";
const GET_FOR_INGREDIENT    = "GET_FOR_INGREDIENT";

/**
 * REDUCER
 */
export default function cocktailReducer( state = cocktailData, action ) {
    switch ( action.type ) {
        case GET_COCKTAILS:
            return { ...state, ...action.payload };

        case GET_RANDOM:
            return { ...state, ...action.payload };

        case GET_ID:
            return { ...state, ...action.payload };

        case GET_LIST_INGREDIENT:
            return { ...state, ...action.payload };

        case GET_FOR_INGREDIENT:
            return { ...state, ...action.payload };
        
        default:
            return state;
    }
}

/**
 * ACTIONS
 */
export const getCocktails = (c = 'Cocktail') => async ( dispatch, getState ) => {
    const urlAPI = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${c}`

    try {
        const res = await axios.get(urlAPI);

        if ( c === 'Cocktail' ) {
            dispatch({
                type: GET_COCKTAILS,
                payload: {
                    cocktails: res.data.drinks
                }
            })
        } else {
            dispatch({
                type: GET_COCKTAILS,
                payload: {
                    ordinaryDrinks: res.data.drinks
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const getRandom = (n) => async ( dispatch, getState ) => {
    const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    try {
        let random = [];
        for (let index = 0; index < n; index++) {
            const res = await axios.get(urlAPI);
            random[index] = res.data.drinks;
            
        }

        dispatch({
            type: GET_RANDOM,
            payload: {
                random
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const getByIdCocktail = (id) => async ( dispatch, getState ) => {
    const urlAPI = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    try {
        const res = await axios.get(urlAPI);
        
        dispatch({
            type: GET_ID,
            payload: {
                getId: res.data.drinks[0]
            }
        })

    } catch (error) {
        console.log(error);
    }
}

export const getBynameIngredient = (name) => async ( dispatch, getState ) => {
    const urlAPI = `https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`;

    try {
        const res = await axios.get(urlAPI);
        
        dispatch({
            type: GET_ID,
            payload: {
                getId: res.data.drinks[0]
            }
        })

    } catch (error) {
        console.log(error);
    }
}

export const getListIngredients = () => async ( dispatch, getState ) => {
    const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

    try {
        const res = await axios.get(urlAPI);

        dispatch({
            type: GET_LIST_INGREDIENT,
            payload: {
                listIngredients: res.data.drinks
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const getForIngredients = (i) => async ( dispatch, getState ) => {
    const urlAPI = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${i}`;

    try {
        const res = await axios.get(urlAPI);

        dispatch({
            type: GET_FOR_INGREDIENT,
            payload: {
                forIngredients: res.data.drinks
            }
        })
    } catch (error) {
        console.log(error);
    }
}

