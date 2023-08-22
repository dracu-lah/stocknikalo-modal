import React from "react";

const Item = ({ item, setIsHidden }) => {
  return (
    <div
      onClick={() => {
        setIsHidden((preVisibility) => !preVisibility);
        console.log("item:", item);
      }}
      className="h-12 w-20 flex justify-center items-center bg-red-800"
    >
      {item}
    </div>
  );
};

export default Item;
