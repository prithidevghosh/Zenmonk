import axios from "axios";

export const getPost = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/10";

  return axios.get(baseURL);
};
