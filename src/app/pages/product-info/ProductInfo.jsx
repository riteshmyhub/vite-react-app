import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../../../redux/services/product.service";
import { useSelector, useDispatch } from "react-redux";
import JsonViewer from "../../shared/components/json-viewer/JsonViewer";

export default function ProductInfo() {
   const { loading, product, error } = useSelector((state) => state.productReducer);
   const { id } = useParams();
   const { _get_product_info } = new UserService();
   const dispatch = useDispatch();

   useEffect(() => {
      if (id) {
         dispatch(_get_product_info(+id));
      }
      return () => {};
   }, [id]);

   return (
      <div>
         {loading ? (
            "loading..."
         ) : (
            <div>
               {product ? (
                  <div style={{ padding: "10px" }}>
                     <JsonViewer code={JSON.stringify(product)} />
                  </div>
               ) : (
                  error && <div>{error}</div>
               )}
            </div>
         )}
      </div>
   );
}
