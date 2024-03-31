/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/authSlice';

const Reducer = combineReducers({
	auth: AuthReducer,
});

const STORE = configureStore({
	reducer: Reducer,
});

export type RootState = ReturnType<typeof STORE.getState>;
export type AppDispatch = typeof STORE.dispatch;

export default STORE;
