import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ProfileSlice from "./Slice/profile.slice";

const combinedReducer = combineReducers({
  profile: ProfileSlice
})

export const store = configureStore({
  reducer: combinedReducer,
})

export type RootState = typeof store.getState
export type AppDispatch = typeof store.dispatch