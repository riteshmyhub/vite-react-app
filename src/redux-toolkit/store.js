import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product.slice";
// ...
const store = configureStore({
   reducer: {
      productReducer: productReducer,
   },
});
export default store;
