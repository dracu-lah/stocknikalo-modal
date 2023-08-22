import { useState } from "react";
import "./App.css";
import ItemRow from "./ItemRow";
function App() {
  const [row, setRow] = useState(null);
  const allItems = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "item11",
    "item12",
    "item13",
    "item14",
    "item15",
    "item16",
  ];
  const batchSize = 4; // Number of allItems in each sub-array
  const splitArrays = [];

  for (let i = 0; i < allItems.length; i += batchSize) {
    splitArrays.push(allItems.slice(i, i + batchSize));
  }

  // console.log("Split Arrays:", splitArrays);
  // console.log("allItems", allItems);
  console.log("Row : ", row);
  return (
    <div>
      {/* <h1 className="fixed top-0 p-4">Stock nikalo Modal</h1> */}
      <div>
        {splitArrays.map((items, key) => (
          <ItemRow
            key={key}
            items={items}
            rowState={row}
            row={key}
            onClick={() => {
              setRow(key);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
