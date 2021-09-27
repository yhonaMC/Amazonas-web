import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useStyles } from "./style";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  loginFacebook,
  loginGoogle,
  loginSincrono,
} from "../../actions/actionLogin";

const Login = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginSincrono(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
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
      <form onSubmit={handleLogin}>
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
            Iniciar Sesion
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            autoComplete="email"
            value={email}
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
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.textfield}
            value={password}
            onChange={handleInputChange}
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
            Iniciar sesion
          </Button>

          <Button
            type="submit"
            fullWidth
            onClick={handleGoogle}
            sx={{
              mb: 2,
              background: "#F0AD64",
              color: "white",
              "&:hover": {
                background: "#F0AD64",
              },
            }}
          >
            Iniciar con Google
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_20/v1632526094/amazonas/2000px-Google_G_Logo.svg__afs75y.png"
              alt=""
              className={classes.image}
            />
          </Button>

          <Button
            type="submit"
            fullWidth
            onClick={handleFacebook}
            sx={{
              mb: 2,
              background: "#F0AD64",
              color: "white",
              "&:hover": {
                background: "#F0AD64",
              },
            }}
          >
            Iniciar con Facebook
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_20/v1632529007/amazonas/facebook-logo-3-1_fegy6m.png"
              alt=""
              className={classes.image}
            />
          </Button>

          <Link to="/auth/registro" className={classes.Link}>
            Si no tienes cuenta Registrate
          </Link>
        </Paper>
      </form>
    </Box>
  );
};

export default Login;
