import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Navbar, Products, Cart,Checkout,Testingapp,Signup,TestApp } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFRomCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/" element={<Products />} >
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart" element={<Cart />}  >
            <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFRomCart={handleRemoveFRomCart}
              handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" element={<Checkout />}> 
            <Checkout cart={cart}/>
          </Route>
          <Route path="/testing" element={<Testingapp/>}> 
            <Testingapp />
          </Route>
          <Route path="/signup" element={<Signup/>}> 
            <Signup />
          </Route>
          <Route path="/testapp" element={<TestApp/>}> 
            <TestApp />
          </Route>
          
          
        </Switch>
      </div>
    </Router>

  );
};

export default App;
