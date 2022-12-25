import axios from "axios"

import { ValuesLog } from "../components/Login/LoginForm/LoginForm";
import { ICartDate } from "../redux/CartSlice";
import { IUserDate } from "../redux/LoginSlice";
// базовый URL
axios.defaults.baseURL = `https://6273bec53d2b51007421132c.mockapi.io/`;



export const loginAPI = {
	сheckPassword: (password: string | undefined) => axios.get(`users?search=${password}`),
	regUser: (regData: ValuesLog) => axios.post('users', regData),
	putUserData: (userData: IUserDate) => axios.put(`users/:${userData.id}`, userData),
};

export const itemAPI = {
	getItem: (page: number = 1) => axios.get(`item`),
};

export const orderAPI = {
	setOrder: (orderData: ICartDate) => axios.post('orders', orderData),
};