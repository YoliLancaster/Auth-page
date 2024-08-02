import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  //true false response
  login: (email, password) => {
    return apiClient.get("/employee/login", {
      params: { email, password },
    });
  },
  register: (employee) => {
    return apiClient.post("/employee/register", employee);
  },
  getAllEmployees: () => {
    return apiClient.get("/employee");
  },
  getEmployee: (id) => {
    return apiClient.get(`/employee/${id}`);
  },
  //update
  //delete
};

export default apiService;
