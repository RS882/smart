import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IDeliveryFormDate } from '../components/Cart/Delivery/CartDeliveryForm';
import { IRecipientFormDate } from '../components/Cart/Recipient/RecipientForm';
import { RootState } from './store';


export interface ICartSlice {
	isCartPage: boolean;
	itemsOrder: string[];
	totalPriese: number;
	delivery: IDeliveryFormDate;
	paymentMethod: string,
	recipient: IRecipientFormDate,
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
	recipient: {
		name: '',
		surname: '',
		phone: '',
		email: '',
		dontCall: true,
	},
	paymentMethod: '',

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
		setPaymentMethod: (state, action: PayloadAction<string>) => {
			state.paymentMethod = action.payload;
		},
		setRecipient: (state, action: PayloadAction<IRecipientFormDate>) => {
			state.recipient = action.payload;
		},

		clearCart: (state) => {
			state.itemsOrder = [];
			state.totalPriese = 0;
			state.delivery = {
				city: '',
				delivery: '',
				deliveryDate: '',
				deliveryTime: '',
				deliveryStreet: '',
				deliveryFlat: '',
				comment: '',
				shopAdress: '',
			};
			state.recipient = {
				name: '',
				surname: '',
				phone: '',
				email: '',
				dontCall: true,
			};
			state.paymentMethod = '';
		},


	}
});

export const { setIsCartPage, setOrderItems, setTotalPiese, setDeliveryDate, setPaymentMethod, setRecipient, clearCart,
} = CartSlice.actions;

export const selectIsCartPage = (state: RootState) => state.cart.isCartPage;
export const selectDeliveryDetails = (state: RootState) => state.cart.delivery;
export const selectPaymentMethodDetails = (state: RootState) => state.cart.paymentMethod;
export const selectRecipientCart = (state: RootState) => state.cart.recipient;

export default CartSlice.reducer