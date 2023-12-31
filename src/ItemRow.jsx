import React, { useState } from "react";
import Modal from "./Modal";
import Item from "./Item";

const ItemRow = ({ items, currentRow, previousRow, ...props }) => {
  const [itemData, setItemData] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  // console.log("isHidden:", isHidden);
  // console.log("itemData:", itemData);
  // console.log("rowItems", items);
  return (
    <div className="flex flex-col " {...props}>
      <div className="flex justify-around items-center  m-2 gap-x-4">
        {items.map((item, key) => {
          return (
            <Item
              key={key}
              item={item}
              onClick={() => {
                if (currentRow !== previousRow) {
                  console.log("currentRow", currentRow);
                  console.log("previousRow", previousRow);
                }
                if (item === itemData) {
                  setIsHidden((preVisibility) => !preVisibility);
                }
                setItemData(item);
              }}
            />
          );
        })}
      </div>
      <Modal
        className="bg-gray-700 p-10  m-2"
        item={itemData}
        hidden={isHidden}
      />
    </div>
  );
};

export default ItemRow;
