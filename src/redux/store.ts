import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./LanguageSlice";
import ActionReducer from "./ActionSlice";
import ModalReducer from "./ModalSlice";
import MenuReducer from "./MenuSlice";
import CatalogReducer from "./CatalogSlice";
import AppReducer from "./AppSlice";
import LoginReducer from "./LoginSlice";
import ItemReducer from "./ItemSlice";
import ErrorReducer from "./ErrorSlice";
import PreloaderReducer from "./PreloaderSlice";

const store = configureStore({
	reducer: {
		languages: LanguageReducer,
		action: ActionReducer,
		modal: ModalReducer,
		menu: MenuReducer,
		catalog: CatalogReducer,
		app: AppReducer,
		login: LoginReducer,
		item: ItemReducer,
		error: ErrorReducer,
		preloader: PreloaderReducer,
	}
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



export default store;