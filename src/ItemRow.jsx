import React, { useState } from "react";
import Modal from "./Modal";
import Item from "./Item";

const ItemRow = ({ items }) => {
  const [itemData, setItemData] = useState();
  const [isHidden, setIsHidden] = useState(true);

  console.log("isHidden:", isHidden);
  return (
    <div className="flex flex-col ">
      <div className="flex justify-around items-center  m-2 gap-x-4">
        {items.map((item, key) => {
          return <Item key={key} item={item} setIsHidden={setIsHidden} />;
        })}
      </div>
      <Modal className="bg-gray-700 p-10  m-2" item={'2'} hidden={isHidden} />
    </div>
  );
};

export default ItemRow;
