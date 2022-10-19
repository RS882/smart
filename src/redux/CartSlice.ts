import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';


export interface ICartSlice {
	isCartPage: boolean;
	deliveryPrise: string;

};

const initialState: ICartSlice = {
	isCartPage: false,
	deliveryPrise: '0.00',

};
// Reducer of the Cart
const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsCartPage: (state, action: PayloadAction<boolean>) => {
			state.isCartPage = action.payload;
		},
		setdeliveryPrise: (state, action: PayloadAction<string>) => {
			state.deliveryPrise = action.payload;
		}

	}
});

export const { setIsCartPage, setdeliveryPrise } = CartSlice.actions;

export const selectIsCartPage = (state: RootState) => state.cart.isCartPage;
export const selectdeliveryPrise = (state: RootState) => state.cart.deliveryPrise;
export default CartSlice.reducer