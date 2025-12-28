import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Each item: { item_id, name, price, image, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Logic using item_id as per your database
      const existingItem = state.items.find(
        (item) => item.item_id === action.payload.item_id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.item_id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { item_id, type } = action.payload; // type can be 'inc' or 'dec'
      const item = state.items.find((i) => i.item_id === item_id);
      if (item) {
        if (type === 'inc') {
          item.quantity += 1;
        } else if (type === 'dec' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;