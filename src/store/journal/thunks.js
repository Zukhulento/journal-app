import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDb, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    console.log({ newDoc, setDocResp });
  };
};
