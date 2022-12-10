import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    cartAdd: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    cartDelete: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
  },
});
export const {cartAdd, cartDelete} = CartSlice.actions;
export const cart = state => {
  state.cart;
};

export default CartSlice.reducer;
