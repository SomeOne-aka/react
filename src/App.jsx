import React from "react";

// Portals/Modal
// import Modal from "./Project&Concepts/portals/Modal";

// OpenClassrooms
import Banner from "./Project&Concepts/OpenClassrooms/Banner";
import Cart from "./Project&Concepts/OpenClassrooms/Cart";
import ShoppingList from "./Project&Concepts/OpenClassrooms/ShoppingList";
import Footer from "./Project&Concepts/OpenClassrooms/Footer";
import "./Project&Concepts/OpenClassrooms/styles/layout.css";

const App = () => {
  let parent = "RBY";
  return (
    <>
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
    </>
  );
};

export default App;
