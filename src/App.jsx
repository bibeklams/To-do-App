import { useState } from "react";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleAdd = () => {
    if (task.trim() === "") return;
    if (editId) {
      setTasks(tasks.map((t) => (t.id === editId ? { ...t, text: task } : t)));

      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }

    setTask("");
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleEdit = (id) => {
    const toEdit = tasks.find((t) => t.id === id);
    setTask(toEdit.text);
    setEditId(id);
  };
  const filteredTask = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "incompleted") return t.incompleted;
    return true;
  });
  return (
    <div className="container">
      <h1>To-Do App</h1>
      <div className="contain">
        <input
          type="text"
          placeholder="Enter the Task"
          value={task}
          onKeyPress={(e) => {
            e.key === "Enter" && handleAdd();
          }}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>
      </div>
      <div className="display">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("complete")}>Complete</button>
        <button onClick={() => setFilter("incompleted")}>Incomplete</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{ textDecoration: t.completed ? "line-through" : "none" }}
          >
            <span onClick={() => toggleComplete(t.id)}>{t.text}</span>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
