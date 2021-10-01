import { types } from "../types/types";

const initialState = {
  product: [],
};

export const ProductosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadProduct:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
