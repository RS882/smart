import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./LanguageSlice";
import ActionReducer from "./ActionSlice";
import ModalReducer from "./ModalSlice";

const store = configureStore({
	reducer: {
		languages: LanguageReducer,
		action: ActionReducer,
		modal: ModalReducer,
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



export default store;