import { types } from "../types/types";
import Swal from "sweetalert2";

import {
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { google, facebook } from "../Firebase/firebaseConfig";

// Sweet Alert
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const loginCorreo = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincrono(user.displayName, user.uid));
        Toast.fire({
          icon: "success",
          title: `Bienvenido ${user.displayName}`,
        });
      })
      .catch((e) => {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "Usuario no existe",
        });
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincrono(user.displayName, user.uid));
        Toast.fire({
          icon: "success",
          title: `Bienvenido ${user.displayName}`,
        });
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
        Toast.fire({
          icon: "success",
          title: `Bienvenido ${user.displayName}`,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
  };
};

export const logout = () => ({
  type: types.logout,
});

export const loginSincrono = (name, password) => {
  return {
    type: types.login,
    payload: {
      password,
      name,
    },
  };
};
