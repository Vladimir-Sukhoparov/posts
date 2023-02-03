const url = "https://jsonplaceholder.typicode.com/posts?_limit=3";
async function getPosts() {
  try {
    const response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
export default getPosts();
