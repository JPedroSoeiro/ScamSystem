import axios from "axios";

const api = axios.create({
  baseURL: "https://api.veneravelmestre.com.br/",
});

export default api;
