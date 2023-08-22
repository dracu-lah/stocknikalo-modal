import React from "react";

const Item = ({ item, ...props }) => {
  return (
    <div
      className="h-12 w-20 flex justify-center items-center bg-red-800"
      {...props}
    >
      {item}
    </div>
  );
};

export default Item;
