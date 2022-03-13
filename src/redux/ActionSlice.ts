import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAction {
	count: {
		viewed: number;
		favorites: number;
		compare: number;
	}
};
const initialState: IAction = {
	count: {
		viewed: 0,
		favorites: 0,
		compare: 0,
	}
};

const ActionSlice = createSlice({

	name: 'action',
	initialState,
	reducers: {
		addViewedCount: (state) => { ++state.count.viewed },
		addFavoritesCount: (state) => { ++state.count.favorites },
		addCompareCount: (state) => { ++state.count.compare },
		clearCounts: (state) => {
			let key: keyof typeof state.count;
			for (key in state.count) { state.count[key] = 0; }
		},

	}

})


export const { addViewedCount, addFavoritesCount, addCompareCount, clearCounts, } = ActionSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectViewedCount = (state: RootState) => state.action.count.viewed;
export const selectFavoritesCount = (state: RootState) => state.action.count.favorites;
export const selectCompareCount = (state: RootState) => state.action.count.compare;
export default ActionSlice.reducer