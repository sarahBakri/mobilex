/* eslint-disable import/no-extraneous-dependencies */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '.';
import store from '.';

export const useAppDispatch = (): ThunkDispatch<typeof store.getState, undefined, AnyAction> =>
	useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
