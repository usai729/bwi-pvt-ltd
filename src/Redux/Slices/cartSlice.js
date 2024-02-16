import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartSize: 0,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.items.includes(action.payload.id)) {
        if (state.cartSize <= 0) {
          return;
        }

        state.items = state.items.filter((id) => id !== action.payload.id);
        state.cartSize -= 1;
      } else {
        state.cartSize += 1;
        state.items.push(action.payload.id);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
