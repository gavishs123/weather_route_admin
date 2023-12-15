import { configureStore } from '@reduxjs/toolkit'
import { persistedReducer } from './rootReducer'
import persistStore from 'redux-persist/es/persistStore'
import { analyticsAPI } from '../APISlices/analytics'
import { supportAPI } from '../APISlices/support'
import { mapAPI } from '../APISlices/map'
import { locationIconAPI } from '../APISlices/locationIcon'

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false })
            .concat(analyticsAPI.middleware)
            .concat(supportAPI.middleware)
            .concat(mapAPI.middleware)
            .concat(locationIconAPI.middleware)
    }
})

export const persistor = persistStore(store)