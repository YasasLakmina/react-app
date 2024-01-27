import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpended, setExpended] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpended ? children : children.substring(0, maxChars);
  return (
    <div>
      {text}...
      <button onClick={() => setExpended(!isExpended)}>
        {isExpended ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
