import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../../styles/style.css";
import { useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import { setDelete } from "../../actions/actionProductos";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Detalles = () => {
  const producto = useSelector((state) => state.categorys.product);
  const { nombre, Descripcion, imagenes, precio, id } = producto;
  const [image, setImage] = useState(imagenes[0]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEliminar = (id) => {
    dispatch(setDelete(id));
    history.push("/principal");
  };

  const handleClickImage = (imagen) => {
    setImage(imagen);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Item>
              {imagenes.map((imagen) => (
                <img
                  src={imagen}
                  srcSet={imagen}
                  className="lefimg"
                  onClick={() => handleClickImage(imagen)}
                  key={imagen.id}
                />
              ))}
            </Item>
          </Grid>
          <Grid item xs={5}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: image,
                },
                largeImage: {
                  src: image,
                  width: 800,
                  height: 650,
                },
              }}
            />
            {/* <Item> */}

            {/* </Item> */}
          </Grid>
          <Grid item xs={4}>
            <h5 className="title">{nombre}</h5>
            <p className="textprecio">
              Precio:<span className="precio">${precio}</span>{" "}
              <span>Envio Gratis</span>
            </p>
            <div className="description">
              <h2>Acerca de este articulo</h2>
              {Descripcion.map((text) => (
                <ul>
                  <li>{text}</li>
                </ul>
              ))}
            </div>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <h5 className="precioR">$:{precio}</h5>
              <span>Envio Gratis</span>
              <p className="llegada">
                Llega:<span> Oct 15-22</span>{" "}
              </p>
              <p className="infolle">Puede que lo recibas despues de octubre</p>
              <button className="buttoncarrito">Editar</button>

              <button
                className="buttonahora"
                onClick={() => handleEliminar(id)}
              >
                Eliminar
              </button>
            </Item>
          </Grid>
          {/* <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Detalles;
