import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
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

export const setDelete = (id) => {
  return async (dispatch) => {
    await deleteDoc(doc(db, "productos", id));
    dispatch(listarProductos("productos"));
  };
};
