import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    dispatch(savingNewNote());

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDb, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToSave = { ...note };
    delete noteToSave.id;
    console.log(noteToSave);
    // Haciendo referencia al documento
    const docRef = doc(FirebaseDb, `${uid}/journal/notes/${note.id}`);
    // Guardando el documento
    // El merge hace que se unan donde tengan datos que no se envíen o reciban
    await setDoc(docRef, noteToSave, { merge: true });
    dispatch(updateNote(note));
  };
};
