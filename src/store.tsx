import { configureStore } from '@reduxjs/toolkit';
import { rootReducer as reducer } from './reducers/reducer'

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  });

export type AppState = ReturnType<typeof reducer>
