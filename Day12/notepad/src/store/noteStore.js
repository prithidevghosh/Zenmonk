import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/noteSlice';
import tempNotesReducer from '../features/tempNoteSlice';

export default configureStore({
    reducer: {
        notes: notesReducer,
        tempnote: tempNotesReducer
    },
});
