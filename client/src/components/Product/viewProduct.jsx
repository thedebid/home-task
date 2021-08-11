import react, { useEffect, useState } from "react";
import Product from "./product";
import httpClient from "./../../utils/httpClient";

function ViewProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    httpClient
      .GET("/product")
      .then((result) => {
        // console.log(result);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //
      });
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <div className="container mydiv">
        <Product products={products} />
      </div>
    </>
  );
}

export default ViewProduct;
