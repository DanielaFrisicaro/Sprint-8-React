import React from "react";
import DetalleProductosInDb from "./DetalleProductosInDb";
import ProductsInDb from "./ProductsInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      <p>Último Producto Agregado</p>
      {/*<!-- Last Movie in DB -->*/}
      <DetalleProductosInDb route="products" />
      {/*<!-- End content row last movie in Data Base -->*/}
      {/*<!-- Genres in DB -->*/}
      <ProductsInDb />
    </div>
  );
}

export default ContentRowCenter;
