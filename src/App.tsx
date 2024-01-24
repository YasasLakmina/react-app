import ListGroup from "./Components/ListGroup";
import { AiFillApple } from "react-icons/ai";

import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button/Button";
import Like from "./Components/Like";

function App() {
  let items = ["New York", "Tokio", "San Fransisco", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <AiFillApple size="40"></AiFillApple>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

      <Like onClick={() => console.log("Clicked")}></Like>
    </div>
  );
}

export default App;
