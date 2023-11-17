import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  page: 1,
  isLoading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.isLoading = true;
    },
    fetchUsersSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchUsersFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  setPage,
} = dataSlice.actions;

export default dataSlice.reducer;

export const fetchUsers = (page) => async (dispatch) => {
  try {
    dispatch(fetchUsersStart());
    const apiUrl = `https://dummyjson.com/users?limit=10&skip=${
      (page - 1) * 10
    }`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    dispatch(fetchUsersSuccess(data.users));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export const selectUsers = (state) => state.data.data;
export const selectPage = (state) => state.data.page;
export const selectIsLoading = (state) => state.data.isLoading;
export const selectError = (state) => state.data.error;
