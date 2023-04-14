import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from '../features/BrandList/brandsSlice';
import productsReducer from '../features/Products/ProductsSlice';
import cartReducer from '../features/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    brands: brandsReducer,
    products: productsReducer,
    cart: cartReducer
  },
});