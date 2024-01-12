import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filters: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
