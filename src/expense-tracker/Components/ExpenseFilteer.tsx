import React from "react";

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
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
}

export default ExpenseFilteer;
