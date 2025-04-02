import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchCustomerType = async () => {
  const response = await axios.get(`${API_BASE_URL}/customer-type`);
  return response.data;
};

export const fetchAccountIndustry = async () => {
  const response = await axios.get(`${API_BASE_URL}/account-industry`);
  return response.data;
};

export const fetchTeamData = async () => {
  const response = await axios.get(`${API_BASE_URL}/team`);
  return response.data;
};
