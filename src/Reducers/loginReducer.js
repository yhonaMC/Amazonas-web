import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        usuario: action.payload.id,
        password: action.payload.displayName,
      };

    default:
      return state;
  }
};
