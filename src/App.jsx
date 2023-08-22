import { useState } from "react";
import "./App.css";
import ItemRow from "./ItemRow";
function App() {
  const [isExtended, setIsExtended] = useState(false);
  const items1 = ["item1", "item2", "item3", "item4"];
  const items2 = ["item5", "item6", "item7", "item8"];
  const items3 = ["item9", "item10", "item11", "item12"];
  const items4 = ["item13", "item14", "item15", "item16"];
  const finalItems = [items1, items2, items3, items4];
  console.log("items3", finalItems);
  console.log("isExtended : ", isExtended);
  return (
    <div>
      {/* <h1 className="fixed top-0 p-4">Stock nikalo Modal</h1> */}
      <div>
        {finalItems.map((items, key) => (
          <ItemRow key={key} items={items} />
        ))}
      </div>
    </div>
  );
}

export default App;
