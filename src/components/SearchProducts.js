import React, { useState, useEffect } from "react";


function SearchProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((result) => result.json())
      .then((result) => {
        const { data } = result;
        setProducts(data);
      }, []);
  });

  // Credenciales de API
  const apiKey = "http://localhost:3000/api/products";

  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">{/* Buscador */}</div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Listado de Productos</h2>
            </div>
            {/* Listado de productos */}
            {products.length > 0 &&
              products.map((product, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {product.nombre}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={product.imagen}
                            alt={product.nombre}
                            style={{
                              width: "90%",
                              height: "200px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                       
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {products.length === 0 && (
            <div className="alert alert-warning text-center">
              Cargando productos...
 
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Falta la API KEY
        </div>
      )}
    </div>
  );
}

export default SearchProducts;
