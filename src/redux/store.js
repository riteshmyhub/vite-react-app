import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product.slice";
import authReducer from "./slices/auth.slice";
// ...
const store = configureStore({
   reducer: {
      productReducer: productReducer,
      authReducer: authReducer,
   },
});
export default store;

