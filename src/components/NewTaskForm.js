import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  const filteredCats = CATEGORIES.filter((cat) => cat !== "All");
  const mappedCats = filteredCats.map((cat) => (
    <option key={cat}>{cat}</option>
  ));

  const [nameInput, setNameInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("Code");
  function handleTextChange(e) {
    setNameInput(e.target.value);
  }
  function handleCategoryChange(e) {
    setCategoryInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newObj = {
      text: nameInput,
      category: categoryInput,
    };
    onTaskFormSubmit(newObj);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {mappedCats}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
