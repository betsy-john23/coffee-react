/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { LoggedInUser } from './login';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// const list = (params?: UserParams): Promise<UserList> => {
//   return axios.get(`${API_BASE_URL}/admin/users`, { params }).then((response) => response.data);
// };

// const create = (user: User): Promise<User> => {
//   return axios.post(`${API_BASE_URL}/admin/users`, user).then((response) => response.data);
// };

// const update = (id: number, loginCreds: Login): Promise<Login> => {
//   return axios.put(`${API_BASE_URL}/admin/users/${id}`, loginCreds).then((response) => response.data);
// };

const get = (id: number): Promise<LoggedInUser> => {
  return axios.get(`${API_BASE_URL}/admin/users/${id}`).then((response) => response.data);
};

// const getRoles = (): Promise<[]> => {
//   return axios.get(`${API_BASE_URL}/roles`).then((response) => response.data);
// };
export { get };
