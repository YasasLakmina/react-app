//import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
}

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
