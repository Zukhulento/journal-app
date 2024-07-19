import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
    console.log(respuesta);
    // TODO: Actualizar el displayName en firebase
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
