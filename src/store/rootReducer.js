import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import { analyticsAPI } from "../APISlices/analytics";
import { supportAPI } from "../APISlices/support";
import { mapAPI } from "../APISlices/map";
import { locationIconAPI } from "../APISlices/locationIcon";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    [analyticsAPI.reducerPath]: analyticsAPI.reducer,
    [supportAPI.reducerPath]: supportAPI.reducer,
    [mapAPI.reducerPath]: mapAPI.reducer,
    [locationIconAPI.reducerPath]: locationIconAPI.reducer,
})
export const persistedReducer = persistReducer(persistConfig, rootReducer)
