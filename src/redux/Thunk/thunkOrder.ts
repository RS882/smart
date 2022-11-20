
import { createAsyncThunk } from '@reduxjs/toolkit';
import { orderAPI } from '../../API/api';

import { ICartDate } from '../CartSlice';


export const setOrder = createAsyncThunk(
	'cart/setOrder',
	async (data: ICartDate, thunkAPI) => {
		const res = await orderAPI.setOrder(data)
			.then(response => response.data)
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);