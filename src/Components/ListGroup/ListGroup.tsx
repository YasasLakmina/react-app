import { MouseEvent, useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "yellow" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //State Hook - this will tell react this component has a data that can change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  //Method 1
  const getMessage = () => {
    return items.length === 0 ? <p>No items in the List</p> : null;
  };
  //JSX Markup
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {/*Method 2
        x && y 
        if x is true it will return y
        if x is false it will return false
      */}
      {items.length === 0 && <p>No items in the List</p>}
      <List>
        {items.map((items, index) => (
          <ListItem
            active={selectedIndex === index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
            key={items}
          >
            {items}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
