import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../styles.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProductos } from "../../actions/actionProductos";
import { listarProductos } from "../../actions/actionProductos";
import { useHistory } from "react-router-dom";

const NavbarBottom = () => {
  const category = useSelector((state) => state.categorys);
  const { product } = category;
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    left: false,
  });

  const history = useHistory();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const viewCategorys = (text) => {
    let resultados = product.filter((product) => product.categoria === text);
    dispatch(setProductos(resultados));
  };

  const todos = (e) => {
    dispatch(listarProductos(e.target.id));
    history.push("/principal");
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["computador", "lapto", "monitor", "mouse", "teclado"].map(
          (text, index) => (
            <ListItem key={text} button onClick={() => viewCategorys(text)}>
              <ListItemText primary={text} />
              <i className="material-icons" id="car">
                keyboard_arrow_right
              </i>
              <hr />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbarBottom">
        <Toolbar>
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, mx: 1 }}
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <i className="material-icons" id="car">
                    menu
                  </i>
                </Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </Typography>
          <div className="todo">
            <h2
              className="bottomText cursor"
              id="productos"
              onClick={(e) => todos(e)}
            >
              Todo
            </h2>
          </div>
          <div className="welcome">
            <h2 className="bottomText">Tarjeta de Regalo</h2>
          </div>
          <div className="welcome">
            <h2 className="bottomText">Prime</h2>
          </div>
          <div className="welcome">
            <h2 className="bottomText">Lo mas vendido</h2>
          </div>
          <div className="welcome">
            <h2 className="bottomText">Amazona Basic</h2>
          </div>
          <div className="welcome">
            <h2 className="bottomText">Computo y Tabletas</h2>
          </div>
          <div className="welcome">
            <h2 className="bottomText">Los mas Regalado</h2>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarBottom;
