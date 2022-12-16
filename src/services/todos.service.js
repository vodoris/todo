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

export { getTodos };
