import { typesProductos } from "../types/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export const aĆ±adirProductos = (
  nombre,
  Descripcion,
  imagenes,
  precio,
  categoria
) => {
  return (dispatch) => {
    const newProducto = {
      nombre,
      Descripcion,
      imagenes,
      precio,
      categoria,
    };
    addDoc(collection(db, "productos"), newProducto)
      .then((response) => {
        dispatch(aĆ±adirProductosSincrono(newProducto));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const aĆ±adirProductosSincrono = (productos) => {
  return {
    type: typesProductos.register,
    payload: productos,
  };
};
