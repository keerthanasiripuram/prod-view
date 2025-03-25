import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl)
const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export const getAPI = async <T>(url: string, config?: {}): Promise<T> => {
  const response = await apiClient.get(url, config)
  return response.data.data
}

export default apiClient;
