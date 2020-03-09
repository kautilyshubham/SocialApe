import axios from "axios";

export const instance = axios.create({
  baseURL: "https://asia-east2-socialape-e9c44.cloudfunctions.net/api/"
});

// Error handlers
const errorHandler = err => {
  console.log(err);
};

// Success handlers
const successHandler = res => {
  console.log("RESPONSE =>", res);
  return res;
};

// Interceptors
//////////////////////////////

instance.interceptors.request.use(request => {
  const token = localStorage.getItem("FBToken");
  console.log("REQUEST =>", request);
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  }
  return request;
});

instance.interceptors.response.use(
  response => successHandler(response),
  error => {
    errorHandler(error);
    return Promise.reject(error);
  }
);
