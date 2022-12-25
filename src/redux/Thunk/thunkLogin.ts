import { createAsyncThunk } from "@reduxjs/toolkit";
import { ValuesLog } from "../../components/Login/LoginForm/LoginForm";
import { IUserDate } from "../LoginSlice";
import { loginAPI } from './../../API/api';
import { converTelNumber } from './../../utilits/functions';


export const loginUser = createAsyncThunk(
	'login/loginUser',
	async (data: ValuesLog, thunkAPI) => {
		const res = await loginAPI.сheckPassword(data.password)
			.then(response => {
				return response.data && response.data[0];
			})
			.then(response => {
				if (data.userEmailFild === response.email ||
					converTelNumber(data.userEmailFild) === converTelNumber(response.phone)) {
					return response
				}
				else {
					const error = new Error(' login or password is incorrect');
					return error.message;
				}
			})
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку

		return res;
	}
);

export const regNewUser = createAsyncThunk(
	'login/regNewUser',
	async (data: ValuesLog, thunkAPI) => {
		const res = await loginAPI.regUser(data)
			.then(response => response.data)
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку

		return res;
	}
);

export const changeUserData = createAsyncThunk(
	'login/changeUserData',
	async (data: IUserDate, thunkAPI) => {
		const res = await loginAPI.putUserData(data)
			.then(response => response.data)
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку

		return res;
	}
);