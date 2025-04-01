// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: { email: "" },
//   reducers: {
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     }
//   }
// });

// export const { setEmail } = userSlice.actions;
// export const store = configureStore({
//   reducer: { user: userSlice.reducer }
// });

// store.js
import { configureStore } from '@reduxjs/toolkit';

// 1. Define initial state for user
const initialUserState = {
    email: '',
};

// 2. Create the user reducer
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};

// 3. Create and export the store using Redux Toolkit
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

