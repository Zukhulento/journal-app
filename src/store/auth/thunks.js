// ? Esta parte es para realizar peticiones asincronas
// ! Esto no se puede conseguir en los reducers

import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmail,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    // console.log( { email, password } );
    dispatch(checkingCredentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    // console.log({ result });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({
      email,
      password,
      displayName,
    });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ email, displayName, photoURL, uid }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    // Inicializando la verificación de credenciales
    dispatch(checkingCredentials());
    // Haciendo la petición al servidor
    const { ok, displayName, photoURL, uid, errorMessage } =
      await loginWithEmailPassword({
        email,
        password,
      });
    // Si no es correcto el inicio de sesión
    if (!ok) return dispatch(logout({ errorMessage }));
    // Iniciando sesión
    dispatch(login({ email, displayName, photoURL, uid }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await logoutFirebase();
      dispatch(logout({}));
    } catch (error) {
      console.log(error);
    }
  };
};
