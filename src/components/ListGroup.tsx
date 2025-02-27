import { useState } from "react";

interface ListItems {
  heading: string;
  items: string[];
  onSelection: (item: string) => void;
}

export function ListGroup({ heading, items, onSelection }: ListItems) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log("I am rerendered, " + heading); // for each usestate component will be rerendered
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items to display</p>}
      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            onClick={() => {
              setSelectedIndex(idx);
              onSelection(item);
            }}
            key={idx}
            //   className="list-group-item active"
            className={
              idx === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
