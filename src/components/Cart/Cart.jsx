import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Button } from '@material-ui/core'
import CartItem from "./CartItem/CartItem";
import useStyles from "./Styles";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFRomCart, handleEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => {
    <Typography variant="subtitle">You Have No Item In Your Cart</Typography>;
  };
  const FiledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFRomCart={handleRemoveFRomCart} 
                />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>

          <div>
            <Button
              type="button"
              className={classes.emptyButton}
              size="large"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Card
            </Button>
            <Button
              component={Link}
              to="/checkout"
              type="button"
              className={classes.checkoutButton}
              size="large"
              variant="contained"
              color="primary"

            >
              Check Out
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FiledCart />}
    </Container>
  );
};

export default Cart;
