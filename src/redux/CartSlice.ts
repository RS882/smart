import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IDeliveryFormDate } from '../components/Cart/Delivery/CartDeliveryForm';
import { RootState } from './store';


export interface ICartSlice {
	isCartPage: boolean;
	itemsOrder: string[];
	totalPriese: number;
	delivery: IDeliveryFormDate;
};

const initialState: ICartSlice = {
	isCartPage: false,
	itemsOrder: [],
	totalPriese: 0,

	delivery: {
		city: '',
		delivery: '',
		deliveryDate: '',
		deliveryTime: '',
		deliveryStreet: '',
		deliveryFlat: '',
		comment: '',
		shopAdress: '',
	},

};
// Reducer of the Cart
const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsCartPage: (state, action: PayloadAction<boolean>) => {
			state.isCartPage = action.payload;
		},
		setOrderItems: (state, action: PayloadAction<string[]>) => {
			state.itemsOrder = action.payload;
		},
		setTotalPiese: (state, action: PayloadAction<number>) => {
			state.totalPriese = action.payload;
		},
		setDeliveryDate: (state, action: PayloadAction<IDeliveryFormDate>) => {
			state.delivery = action.payload;
		},

		clearCart: (state) => {
			state.itemsOrder = [];
			state.totalPriese = 0;
		}


	}
});

export const { setIsCartPage, setOrderItems, setTotalPiese, setDeliveryDate, clearCart,
} = CartSlice.actions;

export const selectIsCartPage = (state: RootState) => state.cart.isCartPage;
export const selectDeliveryDetails = (state: RootState) => state.cart.delivery;

export default CartSlice.reducer