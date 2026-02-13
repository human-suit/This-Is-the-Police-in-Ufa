import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  price: number;
  day: number;
}

const initialState: GameState = {
  price: 0,
  day: 1,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    addPrice(state, action: PayloadAction<number>) {
      state.price += action.payload;
    },
    setDay(state, action: PayloadAction<number>) {
      state.day = action.payload;
    },
    nextDay(state) {
      state.day += 1;
    },
  },
});

export const { setPrice, addPrice, setDay, nextDay } = gameSlice.actions;
export default gameSlice.reducer;
