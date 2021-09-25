import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    textAlign: "center",
    color: "white",
  },
  boton: {
    background: "#F0AD64",
  },
  textfield: {
    color: "white",
    border: "1px solid white",
    outline: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    marginLeft: "10px",
  },
  Link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#F0AD64",
    },
  },
}));
