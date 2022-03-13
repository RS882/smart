import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./LanguageSlice";
import ActionReducer from "./ActionSlice";

const store = configureStore({
	reducer: {
		languages: LanguageReducer,
		action: ActionReducer,
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



export default store;