import React, { useState, useEffect } from "react";

function LastMovieInDb() {
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    fetch(`api/products`)
      .then((result) => result.json())
      .then((result) => result.data)
      .then((result) => {
        const product = result.reduce(
          (prev, current) => {
            if (prev.id > current.id) {
              return prev;
            } else {
              return current;
            }
          },
          [producto]
        );
        setProducto(product);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            {producto.nombre}
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 20 + "rem", objectFit: "contain" }}
              src={producto.imagen}
              alt={`${producto.nombre}`}
            />
          </div>
          <p>{producto.descripcion}</p>

          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            Ver detalle de Productos
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
