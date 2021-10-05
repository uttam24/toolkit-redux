import { createSlice } from '@reduxjs/toolkit';
import {getUsers, getUser} from "../actions/userAction"
const userReducers = createSlice({
	name: 'usersReducer',
	initialState:{
		users:[],
		usersContainer:[],
		loader:false,
		errors:{},
		user:{}
	},
	reducers:{
		/*addUser :(state, action)=>{
			console.log(action);
			state.users = [...state.users, action.payload];
		},*/
		filterdUsers:(state, action)=>{
			state.users = state.usersContainer.filter(user=> user.name.toLowerCase().includes(action.payload));
		}
	},
	extraReducers:{
		[getUsers.pending] : (state, action)=>{
			state.loader = true;
		},
		[getUsers.fulfilled]:(state, action)=>{
			state.loader=false;
			state.users = action.payload;
			state.usersContainer = action.payload;
		},
		[getUsers.rejcted]:(state, action)=>{
			state.loader=false;
			state.errors = action.payload;
		},
		[getUser.pending] : (state, action)=>{
			state.loader = true;
		},
		[getUser.fulfilled]:(state, action)=>{
			state.loader=false;
			state.user = action.payload;
		},
		[getUser.rejcted]:(state, action)=>{
			state.loader=false;
			state.errors = action.payload;
		},
	},
});

export const {filterdUsers} = userReducers.actions;
export default userReducers.reducer