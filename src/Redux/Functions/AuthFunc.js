import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const request = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    const response = await request.json();
    return response;
  } catch (e) {
    throw e;
  }
});
