import React, { useState, useEffect } from "react";


function SearchSuppliers() {
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    fetch("api/suppliers")
      .then((result) => result.json())
      .then((result) => {
        const { data } = result;
        setSuppliers(data);
      }, []);
  });

  // Credenciales de API
  const apiKey = "http://localhost:3000/api/suppliers";

  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">{/* Buscador */}</div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Listado de Proveedores</h2>
            </div>
            {/* Listado de proveedores */}
            {suppliers.length > 0 &&
              suppliers.map((supplier, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <p>
                          {supplier.supplier_cuit}<br></br>
                          {supplier.supplier_denomination}<br></br>
                          {supplier.supplier_email}<br></br>
                          {supplier.activity_id}<br></br>
                          {supplier.representant_cuit}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {suppliers.length === 0 && (
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

export default SearchSuppliers;
