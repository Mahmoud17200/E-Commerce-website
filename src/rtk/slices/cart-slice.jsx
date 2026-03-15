import { createSlice } from "@reduxjs/toolkit";

// دالة لحفظ الكارت في localStorage
const saveToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// initial state: لو فيه حاجة موجودة في localStorage نستخدمها
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  isSideBarOpen: false,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToSideBar: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += action.payload.quantity || 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }

      state.isSideBarOpen = true;
      saveToLocalStorage(state.cartItems);
    },

    addQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
      saveToLocalStorage(state.cartItems);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== action.payload.id
          );
      }
      saveToLocalStorage(state.cartItems);
    },

    deleteFromCart: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
      saveToLocalStorage(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveToLocalStorage(state.cartItems);
    },

    openSideBar: (state) => {
      state.isSideBarOpen = true;
    },

    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const {
  addToSideBar,
  deleteFromCart,
  clearCart,
  openSideBar,
  closeSideBar,
  addQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
