
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Metrics {
  totalUser: number;
  totalReferral: number;
  activeUser: number;
  creator: number;
}

interface MonthlyChartData {
  labels: string[];
  data: number[];
}

interface UserState {
  daily: Metrics | null;
  monthly: Metrics | null;
  allTime: Metrics | null;
  monthlyChartData: MonthlyChartData | null;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  daily: null,
  monthly: null,
  allTime: null,
  monthlyChartData: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to start loading
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Action to set user metrics
    setUserMetrics: (state, action: PayloadAction<{ daily: Metrics, monthly: Metrics, allTime: Metrics, monthlyChartData: MonthlyChartData }>) => {
      state.daily = action.payload.daily;
      state.monthly = action.payload.monthly;
      state.allTime = action.payload.allTime;
      state.monthlyChartData = action.payload.monthlyChartData;
      state.loading = false;
    },
    // Action to set error
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export actions
export const { startLoading, setUserMetrics, setError } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
