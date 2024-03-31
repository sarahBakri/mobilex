// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const InitialState = {
	isLogedIn: [],
};

const AuthSlice = createSlice({
	name: 'auth',
	initialState: InitialState,
	reducers: {
		setIsLogedIn: (state, action) => {
			state.isLogedIn = action.payload;
		},
	},
});

export const { setIsLogedIn } = AuthSlice.actions;

export default AuthSlice.reducer;
