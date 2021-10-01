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
            <Item sx={{ display: "flex", mt: 2 }}>xs=4</Item>
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
