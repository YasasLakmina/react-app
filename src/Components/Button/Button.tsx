interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

import styled from "styled-components";

const MyButton = styled.button`
  background-color: #0d6efd;
  padding: 8px 12px;
  border-radius: 3px;
  outline: none;
  border: 0;
  color: white;
`;

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <MyButton className={"btn btn-" + color} onClick={onClick}>
      {children}
    </MyButton>
  );
};

export default Button;
