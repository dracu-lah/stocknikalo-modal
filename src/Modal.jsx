import React from "react";

function Modal({ item, ...props }) {
  return (
    <div {...props}>
      <h1>Modal</h1>
      <p>{item}</p>
    </div>
  );
}

export default Modal;
