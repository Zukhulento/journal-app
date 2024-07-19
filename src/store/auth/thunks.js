// ? Esta parte es para realizar peticiones asincronas
// ! Esto no se puede conseguir en los reducers

import { singInWithGoogle } from "../../firebase/providers";
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
    console.log({result});
    if(!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
