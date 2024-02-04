import React from "react";
import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilteer({ onSelectCategory }: Props) {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilteer;
