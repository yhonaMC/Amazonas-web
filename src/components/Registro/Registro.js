import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useStyles } from "../Login/style";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { registerDatos } from "../../actions/actionRegister";

const Registro = () => {
  const classes = useStyles();

  const [formValues, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const { nombre, apellido, email, password } = formValues;
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerDatos(nombre, apellido, email, password));
  };

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#131921",
        "& > :not(style)": {
          m: 5,
          width: 300,
          height: "87.5vh",
        },
      }}
    >
      <form onSubmit={handleRegister}>
        <Paper
          sx={{
            p: 2,
            display: "grid",
            bgcolor: "#131921",
            color: "white",
            border: "2px solid white",
          }}
        >
          <div>
            <img src="https://res.cloudinary.com/yhonamc/image/upload/v1632526742/image_1_lj12jw.png" />
          </div>

          <Typography
            component="h1"
            variant="h5"
            className={classes.typography}
          >
            Registro
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            label="nombre"
            type="text"
            name="nombre"
            autoComplete="nombre"
            value={nombre}
            onChange={handleInputChange}
            sx={{
              border: "1px solid white",
              color: "black",
              background: "white",
              borderRadius: "5px",
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            label="Apellido"
            name="apellido"
            autoComplete="Apellido"
            value={apellido}
            onChange={handleInputChange}
            sx={{
              border: "1px solid white",
              color: "black",
              background: "white",
              borderRadius: "5px",
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="email"
            type="email"
            autoComplete="current-password"
            value={email}
            onChange={handleInputChange}
            className={classes.textfield}
            sx={{
              color: "black",
              border: "1px solid white",
              background: "white",
              borderRadius: "5px",
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handleInputChange}
            className={classes.textfield}
            sx={{
              color: "black",
              border: "1px solid white",
              background: "white",
              borderRadius: "5px",
            }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 2,
              mb: 2,
              background: "#F0AD64",
              color: "white",
              "&:hover": {
                background: "#F0AD64",
              },
            }}
          >
            Registrate
          </Button>
          <Link to="/" className={classes.Link}>
            Iniciar Sesion
          </Link>
        </Paper>
      </form>
    </Box>
  );
};

export default Registro;
