import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export const loadProducto = async (collect) => {
  const data = await getDocs(collection(db, collect));
  const productos = [];

  data.forEach((product) => {
    productos.push({
      id: product.id,
      ...product.data(),
    });
  });
  return productos;
};
