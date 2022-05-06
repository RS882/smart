import axios from "axios"
// базовый URL
axios.defaults.baseURL = `https://6273bec53d2b51007421132c.mockapi.io/`;

export const loginAPI = {
	loginUser: (password: string | undefined) => axios.get(`users?search=${password}`),


}