import axios from "axios";
import store from "store/index";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://us-west2-woozlabs.cloudfunctions.net/"
      : "http://localhost:5001/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  function (config) {
    if (config.headers) {
      config.headers.authorization = store.getters["auth/user/GET_TOKEN"];
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
