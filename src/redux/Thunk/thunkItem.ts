
import { createAsyncThunk } from '@reduxjs/toolkit';
import { log } from 'console';
import { itemAPI } from '../../API/api';

export const getItem = createAsyncThunk(
	'item/getItem',
	async (page: number, thunkAPI) => {
		const res = await itemAPI.getItem(page)
			.then(response => response.data)

			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку

		return res;
	}
)