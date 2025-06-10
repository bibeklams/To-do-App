function Text({ toggleComplete, id, text, completed }) {
  return (
    <span
      style={{
        textDecoration: completed ? "line-through double red" : "none",
      }}
      onClick={() => toggleComplete(id)}
    >
      {text}
    </span>
  );
}
export default Text;
