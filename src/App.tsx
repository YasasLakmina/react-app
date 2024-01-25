import ListGroup from "./Components/ListGroup";
import { AiFillApple } from "react-icons/ai";

import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button/Button";
import Like from "./Components/Like";

function App() {
  //Same kind stateHooks
  // const [title, setTitle] = useState("Americano");
  // const [price, setPrice] = useState(5);

  //We can add as an object by combining state same kind of state hooks
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [tags, setTags] = useState(["happy", "cheerful"]);

  //Updating an array of objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    //to update array of objects
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    //Add
    setTags([...tags, "exiting"]);

    //delete
    setTags(tags.filter((tag) => tag !== "happy"));

    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    setDrink({ ...drink, price: 6 });
  };

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
      <br />
      <br />
      <Like onClick={() => console.log("Clicked")}></Like>
      <br />
      <br />
      {drink.price}
      <> </>
      <button onClick={handleClick}> Click Me</button>
    </div>
  );
}

export default App;
