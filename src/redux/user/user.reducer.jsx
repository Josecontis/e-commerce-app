import { userActionTypes } from './user.types';

//come stato iniziale l'utente non è loggato quindi null
const INITIAL_STATE = {
    currentUser: null
};

// a partire da uno stato iniziale nullo se l'azione è SET_CURRENT_USER aggiorna lo stato
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload //assegna a currentUser le info dell' utente loggato
            }

        default:
            return state;
    }
}

export default userReducer;