import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ parent }) => {
  let modalChild = <h2>I'm a Modal {parent}</h2>;
  return ReactDOM.createPortal(modalChild, document.body);
};

export default Modal;
