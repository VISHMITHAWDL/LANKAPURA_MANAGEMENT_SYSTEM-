import VITE_API_BASE_URL from "../Const";
import axios from "axios";

const login_api = async (email, password) => {
  try {
    const response = await axios.post(`${VITE_API_BASE_URL}/auth/login`, {
      email,
      password,
    });

    return response.data; // contains token, role, etc.
  } catch (error) {
    console.error("Login API Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export { login_api };

