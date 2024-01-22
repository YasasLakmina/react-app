function ListGroup() {
  const items = ["New York", "Tokio", "San Fransisco", "London", "Paris"];

  //JSX Markup
  return (
    <>
      <h1>List</h1>
      {items.map((items) => (
        <li key={items}>{items}</li>
      ))}
    </>
  );
}

export default ListGroup;
