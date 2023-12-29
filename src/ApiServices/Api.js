import axios from "axios";

export default () => {
  const instance = axios.create({
    baseURL: "http://localhost:8001/",
  });
  if (localStorage.getItem("token")) {
    instance.defaults.headers.common["Authorization"] = `${localStorage.getItem(
      "token"
    )}`;
  }
  instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status == 401) {
        console.log("Your authorization token is invalid or expired");
        localStorage.clear();
        window.location.replace("/");
      } else if (error.response.status == 403) {
        //Redirect to forbidden Page
      }
      return Promise.reject(error.response);
    }
  );
  return instance;
};
