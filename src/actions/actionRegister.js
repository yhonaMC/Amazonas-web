import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const registerDatos = (nombre, apellido, email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: nombre,
          diplayApe: apellido,
        });

        dispatch(
          registerSincrono(
            user.displayName,
            user.displayApe,
            user.email,
            user.uid
          )
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const registerSincrono = (nombre, apellido, email, password) => {
  return {
    type: types.register,
    payload: {
      nombre,
      apellido,
      email,
      password,
    },
  };
};
