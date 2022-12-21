const getTodos = async () => {
  try {
    const response = await fetch("http://localhost:3001/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const deleteTodoItem = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
};

export { getTodos, deleteTodoItem };
