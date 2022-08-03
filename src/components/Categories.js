import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("api/categories")
      .then((result) => result.json())
      .then((result) => setCategories(result));
  }, []);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((result) => result.json())
      .then((result) => {
        setProducts(result.data);
      });
  }, []);
  const [peatonal, setPeatonal] = useState(0);
  useEffect(() => {
    if (products.length >= 1) {
      const datos = products.filter((el) => el.id_categoria === 1);
      setPeatonal(datos);
    }
  }, [products]);
  const [vial, setVial] = useState(0);
  useEffect(() => {
    if (products.length >= 1) {
      const datos = products.filter((el) => el.id_categoria === 2);
      setVial(datos);
    }
  }, [products]);
  const [eventos, setEventos] = useState(0);
  useEffect(() => {
    if (products.length >= 1) {
      const datos = products.filter((el) => el.id_categoria === 3);
      setEventos(datos);
    }
  }, [products]);
  const cuantities = [peatonal.length, vial.length, eventos.length];

  return (
    <>
      <div>
        <div className="container-fluid">
          <p>Categorias de Vallas</p>
        </div>
        <div className="row">
          {categories.map((el, index) => (
            <SmallCard
              key={`${index}`}
              title={`${el.nombre}`}
              cuantity={`${cuantities[index]}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Categories;
