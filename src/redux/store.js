//questo modulo serve per prendere l'azione e passarla agli altri moduli che la gestiranno. utile per il debug!
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

//il logger è un middleware che prende le azioni e le visualizza nella console log
const middlewares = []; //vettore di logger visibili in console che rappresentano le azioni effettate dall'utente

if(process.env.NODE_ENV === 'development'){ //se la modalità dell app è in sviluppatore allora fai vedere i log
    middlewares.push(logger);
}

//middleware sono degli intermediari che prendono le azioni e fanno qualcosa restituendo altre azioni
export const store = createStore(rootReducer, applyMiddleware(...middlewares)) //...middlewares indica i singoli elementi del vettore passati come param

export const persistor = persistStore(store);

export default { store, persistor };