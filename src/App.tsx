//import ListGroup from "./Components/ListGroup";
// import Alert from "./Components/Alert";

import Button from "./Components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Alert>Hello <span>World</span></Alert>
//     </div>
//   );
// }

// function App() {
//   let items = ["New York", "Tokio", "San Fransisco", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//     </div>
//   );
// }

export default App;
