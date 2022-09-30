import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';


export interface ICartSlice {
	isCartPage: boolean;
	// totalPrise: string;
};

const initialState: ICartSlice = {
	isCartPage: false,
	//totalPrise: '0.00'
};
// Reducer of the Cart
const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsCartPage: (state, action: PayloadAction<boolean>) => {
			state.isCartPage = action.payload;
		},
		// setTotalPrise: (state, action: PayloadAction<string>) => {

		// }

	}
});

export const { setIsCartPage } = CartSlice.actions;

export const selectIsCartPage = (state: RootState) => state.cart.isCartPage;

export default CartSlice.reducer