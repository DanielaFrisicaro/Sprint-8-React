import React from "react";
import DetalleProductosInDb from "./DetalleProductosInDb";
import ProductsInDb from "./ProductsInDb";

function ContentRowCenter() {
  return (
    <>
      <p>Último Producto Agregado</p>
      <div className="row">
        {/*<!-- Last Movie in DB -->*/}
        <DetalleProductosInDb route="products" />
        {/*<!-- End content row last movie in Data Base -->*/}
        {/*<!-- Genres in DB -->*/}
        <ProductsInDb />
      </div>
    </>
  );
}

export default ContentRowCenter;
