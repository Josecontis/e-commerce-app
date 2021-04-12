import { combineReducers } from 'redux';

import userReducer from '../redux/user/user.reducer';

//racchiude tutte le reducers effettuate
export default combineReducers({
    user: userReducer
});