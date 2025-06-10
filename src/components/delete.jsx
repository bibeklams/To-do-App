function Delete({ handleDelete, id }) {
  return <button onClick={() => handleDelete(id)}>Delete</button>;
}
export default Delete;
