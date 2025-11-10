import axios from "axios";

const axiosFetch = async ({ url, method, data = null }) => {
  try {
    const token = sessionStorage.getItem("token"); // don't default to '{}'

    const response = await axios.request({
      url: "http://localhost:9090/" + url, // backend URL
      method,
      data,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        : {
            "Content-Type": "application/json",
          },
    });

    return response.data; // return only the data
  } catch (err) {
    console.error("API Error:", err.response || err);
    throw err; // propagate error to frontend for proper handling
  }
};

export default axiosFetch;

