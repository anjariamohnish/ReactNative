import {
    OPEN_CHORDS_MODAL_ACTION,
    CLOSE_CHORDS_MODAL_ACTION
} from "../actions";

const INITIAL_STATE = {
    chordsModalIsOpen: false
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case OPEN_CHORDS_MODAL_ACTION:
        case CLOSE_CHORDS_MODAL_ACTION:
            return { chordsModalIsOpen: action.payload }
        default:
            return state
    }
}