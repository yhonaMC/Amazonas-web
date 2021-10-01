import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { types } from "../types/types";
import { loadProducto } from "../helpers/loadProducto";

export const listarProductos = (collect) => {
  return async (dispatch) => {
    const productos = await loadProducto(collect);
    dispatch(setProductos(productos));
    dispatch(setActivo(productos));
  };
};

export const setProductos = (productos) => ({
  type: types.loadProduct,
  payload: productos,
});

export const setActivo = (productos) => ({
  type: types.productActive,
  payload: productos,
});
