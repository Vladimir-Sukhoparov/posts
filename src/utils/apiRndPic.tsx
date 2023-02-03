
const url = `https://picsum.photos/1100/600`;
async function getRndPic() {
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
    const result = await response;
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
export default getRndPic();
