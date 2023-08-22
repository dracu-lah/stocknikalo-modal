import React from "react";

const Item = ({ item, setIsHidden }) => {
  return (
    <div
      onClick={() => alert(item)}
      // onClick={() => setIsHidden((preVisibility) => !preVisibility)}
      className="h-12 w-20 flex justify-center items-center bg-red-800"
    >
      {item}
    </div>
  );
};

export default Item;
