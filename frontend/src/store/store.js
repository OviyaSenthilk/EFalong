import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { email: "" },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

export const { setEmail } = userSlice.actions;
export const store = configureStore({
  reducer: { user: userSlice.reducer }
});

