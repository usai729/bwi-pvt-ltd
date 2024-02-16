import { createSlice } from "@reduxjs/toolkit";
import { login } from "../Functions/AuthFunc";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
    token: null,
    error: null,
    loading: false,
    isAuth: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = "Internal Server Error";
        state.loading = false;
        console.log(action.error);
      })
      .addCase(login.fulfilled, (state, action) => {
        if (!action.payload.message) {
          localStorage.setItem("token", action.payload.token);
          sessionStorage.setItem("isAuth", true);

          state.id = action.payload.id;
          state.username = action.payload.username;
          state.email = action.payload.email;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.gender = action.payload.gender;
          state.image = action.payload.image;
          state.token = action.payload.token;
          state.isAuth = true;
        } else {
          state.error = action.payload.message;
        }

        state.loading = false;
      });
  },
});

export default userSlice.reducer;
