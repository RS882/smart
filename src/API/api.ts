import axios from "axios"
import { ValuesLog } from "../components/Login/LoginForm/LoginForm";
// базовый URL
axios.defaults.baseURL = `https://6273bec53d2b51007421132c.mockapi.io/`;

export const loginAPI = {
	сheckPassword: (password: string | undefined) => axios.get(`users?search=${password}`),
	regUser: (regData: ValuesLog) => axios.post('users', regData),
}