import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
    testValue: number
}

const initialState: AppState = {
	testValue: 0,
};

const appSlice = createSlice( {
	name: 'app',
	initialState,
	reducers: {
		changeTestValue( state: AppState, action: PayloadAction<number> ) {

			return {
				...state,
				testValue: action.payload
			};

		}
	}
} );

export const {
	changeTestValue
} = appSlice.actions;

export default appSlice;
