import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      // TODO Mensaje de error...
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      // TODO Mostrar mensaje de actualización
      state.messageSaved = `Nota actualizada correctamente`;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = []; // Limpiar las notas
      state.active = null; // Limpiar la nota activa
    },
    setPhotosToActivNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.active = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActivNote,
  setSaving,
  updateNote,
} = journalSlice.actions;
