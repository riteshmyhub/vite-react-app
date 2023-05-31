import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import environment from "../../environments/environment";

export default class ProductService {
   constructor() {}
   // _get_all_Products
   _get_all_products = createAsyncThunk("product/all_products", async (_, thunkAPI) => {
      try {
         const { data } = await axios.get(environment.BASE_URL + "/products");
         return data;
      } catch (error) {
         console.log(error?.response?.data);
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   // _get_Product_info
   _get_product_info = createAsyncThunk("product/product_info", async (id, thunkAPI) => {
      try {
         const { data } = await axios.get(`${environment.BASE_URL}/products/${id}`);
         return data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });
}
