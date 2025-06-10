function Add({ handleAdd, editId }) {
  return <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>;
}

export default Add;
