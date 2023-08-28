import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button
            key={category}
            className={category === selectedCategory ? "selected" : null}
            onClick={event => onCategoryChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
