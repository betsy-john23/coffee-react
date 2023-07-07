/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { DEVELOPMENT } from '../../env/environment';
import { LoggedInUser } from '../login/login';
import { LoginCredentials } from './user';


// const list = (params?: UserParams): Promise<UserList> => {
//   return axios.get(`${API_BASE_URL}/admin/users`, { params }).then((response) => response.data);
// };

// const create = (user: User): Promise<User> => {
//   return axios.post(`${API_BASE_URL}/admin/users`, user).then((response) => response.data);
// };

// const update = (id: number, loginCreds: Login): Promise<Login> => {
//   return axios.put(`${API_BASE_URL}/admin/users/${id}`, loginCreds).then((response) => response.data);
// };

const getUser = (params?: LoginCredentials): Promise<LoggedInUser> => {
  return axios.get(`${DEVELOPMENT.API_BASE_URL}/users`, { params } ).then((response) => response.data);
};

// const getRoles = (): Promise<[]> => {
//   return axios.get(`${API_BASE_URL}/roles`).then((response) => response.data);
// };
export { getUser };
