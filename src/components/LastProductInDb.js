import React from "react";
import ProductsDetailInDb from "./ProductsDetailInDb";
import ProductsInDb from "./ProductsInDb";

function LastProductInDb() {
  return (
    <>
      <p>Último Producto Agregado</p>
      <div className="row">
        {/*<!-- Last Product in DB -->*/}
        <ProductsDetailInDb route="products" />
        {/*<!-- End content row last product in Data Base -->*/}
        {/*<!-- Products in DB -->*/}
        <ProductsInDb />
      </div>
    </>
  );
}

export default LastProductInDb;
