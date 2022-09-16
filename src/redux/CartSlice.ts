import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';


export interface ICartSlice {
	isCartPage: boolean;
};

const initialState: ICartSlice = {
	isCartPage: false,
};
// Reducer of the Cart
const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsCartPage: (state, action: PayloadAction<boolean>) => {
			state.isCartPage = action.payload;
		},

	}
});

export const { setIsCartPage } = CartSlice.actions;

export const selectIsCartPage = (state: RootState) => state.cart.isCartPage;

export default CartSlice.reducer