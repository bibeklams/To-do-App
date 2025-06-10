function Display({ handleAdd, setTask, task }) {
  return (
    <input
      type="text"
      placeholder="Enter the Task"
      value={task}
      onKeyPress={(e) => {
        if (e.key === "Enter") handleAdd();
      }}
      onChange={(e) => setTask(e.target.value)}
    />
  );
}
export default Display;
