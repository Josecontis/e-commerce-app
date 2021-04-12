import { combineReducers } from 'redux';

import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer'

//racchiude tutte le reducers effettuate
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});