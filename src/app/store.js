import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from '../features/BrandList/brandsSlice';
import productsReducer from '../features/Products/ProductsSlice';

export const store = configureStore({
  reducer: {
    brands: brandsReducer,
    products: productsReducer
  },
});