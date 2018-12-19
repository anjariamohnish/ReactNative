import {
    SELECT_KEY_INDEX,
    SELECT_CAPO
} from '../actions/types';

const INITIAL_STATE = {
    selectedKeyIndex: 0,
    selectedCapo: 7,
    capoKeyIndex: 7
}

export default (state = INITIAL_STATE, action) => {
    let capoKeyIndex = null;
    switch (action.type) {
        case SELECT_KEY_INDEX:
            capoKeyIndex = state.selectedCapo + action.payload;
            if (capoKeyIndex >= 12) capoKeyIndex -= 12
            return {
                ...state,
                selectedKeyIndex: action.payload,
                capoKeyIndex
            }
        case SELECT_CAPO:
            capoKeyIndex = state.selectedKeyIndex + action.payload;
            if (capoKeyIndex >= 12) capoKeyIndex -= 12
            return {
                ...state,
                selectedCapo: action.payload,
                capoKeyIndex
            }
        default:
            return state
    }
}