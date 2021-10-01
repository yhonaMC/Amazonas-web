import { typesProductos } from "../types/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export const añadirProductos = (
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
        dispatch(añadirProductosSincrono(newProducto));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const añadirProductosSincrono = (productos) => {
  return {
    type: typesProductos.register,
    payload: productos,
  };
};
