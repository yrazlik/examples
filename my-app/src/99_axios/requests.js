import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request:", config);
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

const fetchMessage = (callback, errorCallback) => {
  axiosInstance
    .get("/message")
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.error(error);
      errorCallback(error);
    });
};

const fetchMessageAsyncAwait = async () => {
  try {
    const response = await axiosInstance.get("/message");
    return response;
  } catch (error) {
    console.error("Error fetching the message:", error);
    throw error;
  }
};

const postMessageAsyncAwait = async (message) => {
  try {
    const response = await axiosInstance.post("/message", {
      message,
    });
    return response;
  } catch (error) {
    console.error("Error posting the message:", error);
    throw error;
  }
};

export { fetchMessage, fetchMessageAsyncAwait, postMessageAsyncAwait };
