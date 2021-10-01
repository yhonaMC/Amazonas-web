import * as React from "react";
import { StyledInputBase, SearchIconWrapper, Search } from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "../../styles.css";
import NavbarBottom from "../NavbarBottom/NavbarBottom";
import Productos from "../Productos/Productos";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/actionLogin";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        ></IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        ></IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src="https://res.cloudinary.com/yhonamc/image/upload/v1632526742/image_1_lj12jw.png" />
          </Typography>

          <div className="welcome">
            <h2>Hola</h2>
            <div className="ubication">
              <i className="material-icons" id="car">
                location_on
              </i>
              <h3>Elige tu direccion</h3>
            </div>
          </div>

          <Search>
            <SearchIconWrapper>
              <i className="material-icons" id="car">
                search
              </i>
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div className="welcome">
            <h2>Hola,identificate</h2>
            <h3>Cuenta y lista</h3>
          </div>

          <div className="welcome">
            <h2>Devoluciones</h2>
            <Link to="/agregar" className="agrega">
              Agregar
            </Link>
          </div>

          <div className="welcome">
            <div className="ubication">
              <i className="material-icons" id="car">
                shopping_cart
              </i>
              <h3>Pedidos</h3>
            </div>
          </div>
          <div className="buttonNew">
            <Button className="button" onClick={() => dispatch(startLogout())}>
              Cerrar Sesion
            </Button>
          </div>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            ></IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            ></IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            ></IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            ></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <NavbarBottom />
    </Box>
  );
};

export default Navbar;
