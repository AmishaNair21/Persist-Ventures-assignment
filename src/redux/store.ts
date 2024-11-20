// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,  // Add your slices here
  },
});

// Create a RootState type to access the state structure in your components.
export type RootState = ReturnType<typeof store.getState>;

// Create a Dispatch type for dispatching actions.
export type AppDispatch = typeof store.dispatch;
