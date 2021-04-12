//questo modulo serve per prendere l'azione e passarla agli altri moduli che la gestiranno. utile per il debug!
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //vettore di logger visibili in console che rappresentano le azioni effettate dall'utente

const store = createStore(rootReducer, applyMiddleware(...middlewares)) //...middlewares indica i singoli elementi del vettore passati come param

export default store;