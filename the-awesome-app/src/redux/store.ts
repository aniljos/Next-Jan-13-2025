import {configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';


const combinedReducer = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})

export const store = configureStore({

    reducer: combinedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }),

});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

