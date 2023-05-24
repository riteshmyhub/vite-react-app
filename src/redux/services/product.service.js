import { createAsyncThunk } from "@reduxjs/toolkit";
import environment from "../../environments/environment";

export default class ProductService {
   constructor() {}
   // _get_all_Products
   _get_all_products = createAsyncThunk("product/all_products", async (_, thunkAPI) => {
      try {
         const { data } = await environment.firebase_api.get("/products.json");
         return data;
      } catch (error) {
         console.log(error?.response?.data);
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   // _get_Product_info
   _get_product_info = createAsyncThunk("product/product_info", async (id, thunkAPI) => {
      try {
         const { data } = await environment.firebase_api.get(`/products.json`);
         let result = data.find((product) => product.id === id);
         if (!result) {
            throw { response: { data: { error: "product no found" } } };
         }
         return result;
      } catch (error) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });
}
