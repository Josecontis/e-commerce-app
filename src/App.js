import React from 'react';
import {Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';

import './App.css';

import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <div>
      <switch>
       <Route exact path='/' component={HomePage}/> {/*exact indica che il path è univico per qll page, path è l'url che in questo caso di HomePage è nullo e component è la pagina*/}
       <Route path='/shop' component={ShopPage}/>
       </switch>
    </div>
  );
}

export default App;
