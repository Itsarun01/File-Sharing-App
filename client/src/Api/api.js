import axois from "axios";

const API_URL = "http://localhost:8080/upload";

export const uploadFile = (file) => {
  try {
    axois.get(API_URL, file);
  } catch (error) {
    console.error("Error While Calling the Api..", error.message);
  }
};
