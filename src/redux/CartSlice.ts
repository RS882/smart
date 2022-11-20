import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { IDeliveryFormDate } from '../components/Cart/Delivery/CartDeliveryForm';
import { IRecipientFormDate } from '../components/Cart/Recipient/RecipientForm';
import { RootState } from './store';
import { setOrder } from './Thunk/thunkOrder';

export interface ICartDate {
	itemsOrder: string[];
	totalPriese: number;
	delivery: IDeliveryFormDate;
	paymentMethod: string,
	recipient: IRecipientFormDate,

};

export interface ICartSlice extends ICartDate {
	isCartPage: boolean;
	orderMessage: string;
};

interface IOrderId {
	id: string;
};



const initialState: ICartSlice = {
	isCartPage: false,
	orderMessage: '',
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
		clearOrderMessage: (state) => {
			state.orderMessage = '';
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


	},
	extraReducers: {
		[setOrder.fulfilled.type]: (state, action: PayloadAction<ICartDate & IOrderId>) => {
			const odredId = action.payload.id
			if (odredId !== undefined) {
				state.orderMessage = `Order №${odredId} accepted. Thanks for your order!`;

			} else {
				// state.userDate = {};
				// state.isLoginSuccess = false;
				state.orderMessage = 'The order is not accepted.  Something went wrong ...(';
			}

		}
	},
});

export const { setIsCartPage, setOrderItems, setTotalPiese, setDeliveryDate, setPaymentMethod, setRecipient, clearCart, clearOrderMessage,
} = CartSlice.actions;

export const selectIsCartPage = (state: RootState) => state.cart.isCartPage;
export const selectDeliveryDetails = (state: RootState) => state.cart.delivery;
export const selectPaymentMethodDetails = (state: RootState) => state.cart.paymentMethod;
export const selectRecipientCart = (state: RootState) => state.cart.recipient;
export const selectOrder = (state: RootState) => ({
	itemsOrder: state.cart.itemsOrder,
	delivery: state.cart.delivery,
	recipient: state.cart.recipient,
	paymentMethod: state.cart.paymentMethod,
	totalPriese: state.cart.totalPriese,

});
export const selectOrderMessage = (state: RootState) => state.cart.orderMessage;

export default CartSlice.reducer