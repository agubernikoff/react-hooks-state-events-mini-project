import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setselectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleClick(e) {
    setselectedCategory(e.target.innerText);
  }

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  function onTaskFormSubmit(obj) {
    setTasks([...tasks, obj]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        handleClick={handleClick}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        CATEGORIES={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
