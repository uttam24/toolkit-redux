import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from './reducers/userReducers';

export default configureStore ({
	reducer : {
		users:userReducers,   
	},
	middleware : [...getDefaultMiddleware()],
});