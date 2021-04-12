import { userActionTypes } from './user.types';

export const setCurrentUser = user => ({

    type: userActionTypes.SET_CURRENT_USER, //nome del metodo per settare lo stato di un utente
    payload: user //payload contiene tutte le info sull'utente loggato

});