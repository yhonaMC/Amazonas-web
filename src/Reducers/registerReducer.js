import { types } from "../types/types";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.register:
      return {
        nombre: action.payload.nombre,
        apellido: action.payload.apellido,
        email: action.payload.email,
        password: action.payload.password,
      };

    default:
      return state;
  }
};
