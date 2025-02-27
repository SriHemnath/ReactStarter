import { useState } from "react";
import "./App.css";
import { ListGroup } from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0);
  const items = ["TamilNadu", "Kerala", "Andra", "MadhyaPradesh"];

  const handleSelectedItem = (item: string) => {
    console.log("selected state = " + item);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ListGroup
        heading="State"
        items={items}
        onSelection={handleSelectedItem}
      />
      <ListGroup
        heading="State-1"
        items={items}
        onSelection={handleSelectedItem}
      />
    </>
  );
}

export default App;
