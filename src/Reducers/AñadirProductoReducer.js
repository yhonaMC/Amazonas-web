import { types, typesProductos } from "../types/types";

const initialState = {
  productos: [],
};

export const A├▒adirProductoReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesProductos.register:
      return {
        productos: [action.payload],
      };

    default:
      return state;
  }
};
