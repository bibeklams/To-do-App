import { useState } from "react";
import Display from "./components/display";
import Add from "./components/add";
import Edit from "./components/edit";
import Text from "./components/text";
import Button from "./components/button";
import Delete from "./components/delete";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");

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

  const filteredTask = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "incompleted") return !t.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>To-Do App</h1>
      <div className="contain">
        <Display setTask={setTask} task={task} handleAdd={handleAdd}></Display>
        <Add handleAdd={handleAdd} editId={editId} />
      </div>
      <Button setFilter={setFilter} filter={filter}></Button>
      <ul>
        {filteredTask.map((t) => (
          <li key={t.id}>
            <Text
              toggleComplete={toggleComplete}
              id={t.id}
              text={t.text}
              completed={t.completed}
            ></Text>
            <Edit handleEdit={handleEdit} id={t.id}></Edit>
            <Delete handleDelete={handleDelete} id={t.id}></Delete>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
