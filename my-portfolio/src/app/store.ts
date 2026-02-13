import { configureStore } from '@reduxjs/toolkit';
import { cityReducer, modalReducer, gameReduser } from '@/entities/';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    modal: modalReducer,
    game: gameReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
