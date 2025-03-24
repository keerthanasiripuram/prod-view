import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

export const getAPI = async <T>(url: string, config?: {}): Promise<T> => {
  const response = await apiClient.get(url, config)
  return response.data.data
}

export default apiClient;
