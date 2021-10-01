import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../../styles.css";
import { imgUpload } from "../../helpers/imgUpload";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { añadirProductos } from "../../actions/actionAñadir";

const NewProduct = () => {
  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    Descripcion: "",
    imagenes: "",
    precio: "",
    categoria: "",
  });
  let { nombre, Descripcion, imagenes, precio, categoria } = values;

  const arregloimg = [];
  const dispatch = useDispatch();
  const [info, setInfo] = useState("");
  const [infoimage, setInfoimage] = useState("");
  let timeout = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    Descripcion = info;
    imagenes = infoimage;
    dispatch(añadirProductos(nombre, Descripcion, imagenes, precio, categoria));
  };

  const handleSubir = () => {
    document.getElementById("file").click();
  };

  const handleUp = ({ target }) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setInfo([...info, target.value]), 500);
  };

  const handleCargar = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      imgUpload(file)
        .then((resp) => {
          arregloimg.push(resp);
          setInfoimage(arregloimg);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  console.log(arregloimg);
  return (
    <div className="divCentral">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          className="inputForm"
          name="nombre"
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Descripcion-1"
          variant="outlined"
          className="inputForm"
          type="text"
          onKeyUp={handleUp}
        />
        <TextField
          id="outlined-basic"
          label="Descripcion-2"
          variant="outlined"
          className="inputForm"
          type="text"
          onKeyUp={handleUp}
        />
        <TextField
          id="outlined-basic"
          label="Descripcion-3"
          variant="outlined"
          className="inputForm"
          type="text"
          onKeyUp={handleUp}
        />
        <TextField
          id="outlined-basic"
          label="Precio"
          variant="outlined"
          className="inputForm"
          name="precio"
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Categoria"
          variant="outlined"
          className="inputForm"
          name="categoria"
          type="text"
          onChange={handleInputChange}
        />
        <input type="file" id="file" multiple onChange={handleCargar} />
        <button className="buttonresgistrar" type="submit">
          Registra tu producto
        </button>
        <button className="buttonimagen" onClick={handleSubir} type="button">
          Subir imagen
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
