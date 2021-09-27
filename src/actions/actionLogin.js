import { types } from "../types/types";
import { getAuth, signInWithPopup } from "firebase/auth";
import { google, facebook } from "../Firebase/firebaseConfig";

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincrono(user.displayName, user.uid));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(loginSincrono(user.displayName, user.uid));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginSincrono = (name, password) => {
  return {
    type: types.login,
    payload: {
      password,
      name,
    },
  };
};
