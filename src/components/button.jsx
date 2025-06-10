function Button({ filter, setFilter }) {
  return (
    <div className="display">
      <button
        onClick={() => setFilter("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
      >
        Complete
      </button>
      <button
        onClick={() => setFilter("incompleted")}
        style={{ fontWeight: filter === "incompleted" ? "bold" : "normal" }}
      >
        Incomplete
      </button>
    </div>
  );
}

export default Button;
