import { createAsyncThunk } from "@reduxjs/toolkit";
import { ValuesLog } from "../../components/Login/LoginForm/LoginForm";
import { loginAPI } from './../../API/api';


export const loginUser = createAsyncThunk(
	'login/loginUser',
	async (data: ValuesLog, thunkAPI) => {
		const res = await loginAPI.loginUser(data.password)
			.then(response => response.data[0])
			.then(response => {
				if (data.userEmailFild === response.email) {
					return response
				} else {
					return new Error(' login or password is incorrect')
				}
			})
			.catch(reject => thunkAPI.rejectWithValue(reject));//выводим ошибку

		return res;
	}
);