import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CityLocation {
  id: string;
  name: string;
  hasTask: boolean;
  taskId?: string;
}

interface CityState {
  locations: CityLocation[];
}

const initialState: CityState = {
  locations: [
    { id: 'loc1', name: 'Downtown', hasTask: true, taskId: 'task1' },
    { id: 'loc2', name: 'Harbor', hasTask: false },
    { id: 'loc3', name: 'Suburbs', hasTask: true, taskId: 'task2' },
  ],
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setTaskForLocation(state, action: PayloadAction<{ locationId: string; taskId: string }>) {
      const location = state.locations.find(loc => loc.id === action.payload.locationId);
      if (location) {
        location.hasTask = true;
        location.taskId = action.payload.taskId;
      }
    },
    clearTaskFromLocation(state, action: PayloadAction<string>) {
      const location = state.locations.find(loc => loc.id === action.payload);
      if (location) {
        location.hasTask = false;
        location.taskId = undefined;
      }
    },
  },
});

export const { setTaskForLocation, clearTaskFromLocation } = citySlice.actions;
export default citySlice.reducer;