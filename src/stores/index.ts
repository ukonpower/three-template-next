import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app';


const store = configureStore( {
	reducer: {
		app: appSlice.reducer,
	}
} );

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

export default store;
