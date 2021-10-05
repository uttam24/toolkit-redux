import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getUsers = createAsyncThunk('users', async()=>{
	const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
	return responce.data;
})

export const getUser = createAsyncThunk('user', async (id)=>{
	const responce = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
	return responce.data;
})