import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import CocktailId from './pages/cocktailId/CocktailId';

import Home from './pages/home/Home';
import ListIngredients from './pages/listIngredients/ListIngredients';



function App() {
  return (
    <BrowserRouter basename='/the_cocktail_db/'>

      <div className='container'>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/cocktail'>
          <Route path=':id'  element={<CocktailId />}  />
        </Route>
        <Route path='/list-ingredients'>
          <Route path=':i' element={<ListIngredients />} />
        </Route>

      </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
