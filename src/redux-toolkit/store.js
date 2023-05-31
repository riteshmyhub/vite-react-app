import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product.slice";
// ...
const store = configureStore({
   reducer: {
      productReducer: productReducer,
   },
});
export default store;

/* 
  --------use in component------

 const { loading, products, error } = useSelector((state) => state.productReducer);
 const dispatch = useDispatch();
 const { _get_all_products } = new ProductService();

 useEffect(() => {
   dispatch(_get_all_products());
   return () => {};
 }, []);
*/
