import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    // Enviando la petición al servidor
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    // console.log(credentials);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      // user data
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmail = async ({
  email,
  password,
  displayName,
}) => {
  try {
    // Mandando la petición al servidor
    const respuesta = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = respuesta.user;
    // TODO: Actualizar el displayName en firebase
    // ? FirebaseAuth.currentUser me permite obtener el usuario actual
    // ? updateProfile me permite actualizar el perfil del usuario
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      ok: true,
      // user data
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // En esta parte se maneja el error
    // Se puede hacer un log del error custom o enviarle la respuesta de firebase
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const respuesta = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { displayName, photoURL, uid } = respuesta.user;
    return {
      ok: true,
      // user data
      displayName,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
