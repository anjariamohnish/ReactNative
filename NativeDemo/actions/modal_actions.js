import {
    OPEN_CHORDS_MODAL_ACTION,
    CLOSE_CHORDS_MODAL_ACTION
} from "./types";

export const openChordsModal = () => ({
    type: OPEN_CHORDS_MODAL_ACTION,
    payload: true
});

export const closeChordsModal = () => ({
    type: CLOSE_CHORDS_MODAL_ACTION,
    payload: false
});
