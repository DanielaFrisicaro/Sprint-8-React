import React, { useState, useEffect } from "react";

function ProductsInDb() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/api/categories")
      .then((result) => result.json())
      .then((result) => setCategories(result));
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Tipos de Vallas
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories.map((el, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{`Vallas ${el.nombre}`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsInDb;
