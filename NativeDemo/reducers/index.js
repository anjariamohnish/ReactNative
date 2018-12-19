import { combineReducers } from 'redux';
import keysReducer from './keys_reducer';
import selectedValuesReducer from './selections_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
    keysReducer,
    selectedValuesReducer,
    modalReducer
})