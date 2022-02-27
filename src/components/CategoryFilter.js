import React from "react";

function CategoryFilter({ categories, selectedCategory = "All", handleClick }) {
  const buttons = categories.map((category) => (
    <button
      key={category}
      name={category}
      onClick={handleClick}
      className={category === selectedCategory ? "selected" : ""}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
