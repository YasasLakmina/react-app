import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "Tokio", "San Fransisco", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
