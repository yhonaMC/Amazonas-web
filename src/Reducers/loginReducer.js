import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        usuario: action.payload.name,
        password: action.payload.password,
      };

    default:
      return state;
  }
};

export const loginFacebook = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        usuario: action.payload.name,
        password: action.payload.password,
      };

    default:
      return state;
  }
};
