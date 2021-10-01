import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../../styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActivo } from "../../actions/actionProductos";

const Productos = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const dispatch = useDispatch();
  const equipos = useSelector((state) => state.product);
  const { product } = equipos;

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item sx={{ mt: 2 }}>
              <div>
                <h2 className="titleinfo">Envios gratis por Amazonas</h2>
                <label className="label">
                  <input
                    type="checkbox"
                    id="cbox1"
                    value="first_checkbox"
                    className="input"
                  />
                  Elige para envios Gratis
                </label>
              </div>

              <div>
                <h2 className="titleinfo">Descuentos Amazonas</h2>
                <div>
                  <label className="label">
                    <input
                      type="checkbox"
                      id="cbox1"
                      value="first_checkbox"
                      className="input"
                    />
                    Elige para Obtener grandes descuentos
                  </label>
                </div>
              </div>

              <div className="depart">
                <h2 className="titleinfo">Departamentos</h2>
                <p className="departament">Computador</p>
                <p className="departament">Laptos</p>
                <p className="departament">Monitor</p>
                <p className="departament">Mouse</p>
                <p className="departament">Teclado</p>
              </div>
              <h2 className="titleinfo">Valoracion de los clientes</h2>
              <div className="starts">
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
              </div>
              <div className="starts">
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
              </div>

              <div className="starts">
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
              </div>

              <div className="starts">
                <i className="material-icons start " id="car">
                  star
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
                <i className="material-icons" id="car">
                  star_outline
                </i>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            {product.map((artefactos) => (
              <Card sx={{ display: "flex", mt: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 250, m: 1 }}
                  image={artefactos.imagenes[0]}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Link
                      to="/detalle"
                      className="link"
                      onClick={() => dispatch(setActivo(artefactos))}
                    >
                      <Typography component="div" variant="p">
                        <strong> {artefactos.nombre}</strong>
                      </Typography>
                    </Link>
                    <div>
                      <i className="material-icons start " id="car">
                        star
                      </i>
                      <i className="material-icons start" id="car">
                        star
                      </i>
                      <i className="material-icons start" id="car">
                        star
                      </i>
                      <i className="material-icons start" id="car">
                        star
                      </i>
                      <i className="material-icons start" id="car">
                        star
                      </i>
                    </div>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      component="div"
                      className="price"
                    >
                      us${artefactos.precio}
                    </Typography>
                    <p className="envio">
                      <span>Envio Gratis</span> a Colombia
                    </p>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Productos;
