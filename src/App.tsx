import ListGroup from "./Components/ListGroup";
import { AiFillApple } from "react-icons/ai";

import { useEffect, useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button/Button";
import Like from "./Components/Like";
import { produce } from "immer";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
import "./App.css";
import ExpenseList from "./expense-tracker/Components/ExpenseList";
import ExpenseFilteer from "./expense-tracker/Components/ExpenseFilteer";
import ExpenseForm from "./expense-tracker/Components/ExpenseForm";
import ProductList from "./Components/ProductList";
import { useFormState } from "react-hook-form";
import apiClient, { CanceledError } from "./services/api-client";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  //Deleting data from server
  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  //Adding data to the server

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([...users, newUser]);

    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  //Updating data from the server
  const updateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUser = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.put("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  //Fetching data from the server
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const [category, setCategory] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpanses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  //Sharing state between components
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  //Exercise 1- updating state
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  //Execise 2
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  //Exercise 3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });

  const handleClick1 = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });

    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });

    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  //Same kind stateHooks
  // const [title, setTitle] = useState("Americano");
  // const [price, setPrice] = useState(5);

  //We can add as an object by combining state same kind of state hooks
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  //Updating an array of objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    //to update array of objects
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    //update array of objects using immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );

    const [tags, setTags] = useState(["happy", "cheerful"]);
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
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}> Click Me</button>

      {/*//Sharing state between NavBar and Cart Components*/}
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>

      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        blanditiis! Debitis consequatur suscipit doloremque voluptatem minima
        aperiam provident distinctio enim quidem, autem mollitia ad, quod
        reiciendis laboriosam error totam tempora praesentium velit perferendis
        officia. Esse tempore nulla, tempora, ratione laudantium ad a
        exercitationem eum rerum nemo eligendi quibusdam, error suscipit iure
        voluptatum quas vero. Nemo ab sunt dolorem fugit ipsum blanditiis
        deserunt nostrum recusandae aliquam voluptate asperiores alias, odit
        itaque, est, in necessitatibus repellendus officia error doloremque.
        Quibusdam iure veritatis harum illo rerum eius neque quas hic animi
        placeat repellat quisquam voluptatum, quam aliquam assumenda provident!
        Totam in nulla corrupti.
      </ExpandableText>

      <Form></Form>
      <br />
      <br />
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpanses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilteer
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilteer>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpanses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>

      <select
        onChange={(event) => setCategory(event.target.value)}
        className="form-select"
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">HouseHold</option>
      </select>

      <ProductList category={category} />

      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
