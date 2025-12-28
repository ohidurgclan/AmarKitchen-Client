import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './app/features/cartSlice/cartSlice';
import authReducer from './app/features/authSlice/authSlice';

const loadState = () => {
  try {
    if (typeof window === 'undefined') return undefined; 
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) return undefined;
    
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    console.log("Error saving state:", err.message);
  }
};

// Initialize store with saved data from localStorage
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, 
  },
  preloadedState, 
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    auth: store.getState().auth, // Capture auth state here
  });
});