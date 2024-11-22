import axois from "axios";

const API_URL = "http://localhost:8080";

const uploadFile = async (data) => {
  try {
    let response = await axois.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.log("Error While Calling the Api..", error.message);
  }
};

export {uploadFile};
