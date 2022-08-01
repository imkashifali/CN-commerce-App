import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';
import logo from "../../Assets/commerce.png";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./Styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  let location = useLocation();



  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce" height="25px" className={classes.image} /> Commerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>

  );
};

export default Navbar;
