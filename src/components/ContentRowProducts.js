import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";



const url = "api";

//PRUEBA CON ELEMENTOS ESTáTICOS SIN INCORPORAR LOS ESTADOS//
// let Products = {
//     title: 'Productos en la Base de Datos',
//     color: 'danger',
//     cuantity: 15,
//     icon: 'fa-clipboard-list'
// }



// let Users = {
//     title:' Usuarios',
//     color:'danger',
//     cuantity: '10',
//     icon:'fa-user-check'
// }



// let Categories = {
//     title:'Categorias' ,
//     color:'danger',
//     cuantity:'30',
//     icon:"far fa-list"
// }

// let cartProps = [Products, Users, Categories];

function ContentRowProducts() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${url}/users`)
      .then((result) => result.json())
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, [users]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${url}/products`)
      .then((result) => result.json())
      .then((result) => setProducts(result.data))
      .catch((err) => console.log(err));
  }, [products]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("api/categories")
      .then((result) => result.json())
      .then((categories) => setCategories(categories));
  });

  return (
    <div className="row">
      <SmallCard
        color="danger"
        icon="fa-user-check"
        title="Usuarios"
        cuantity={`${users.length}`}
      />
      
      <SmallCard
        color="danger"
        icon="fa-clipboard-list"
        title="Productos"
        cuantity={`${products.length}`}
      />
      <SmallCard
        color="danger"
        icon="far fa-list"
        title="Categorías"
        cuantity={`${categories.length}`}
      />
    </div>
  );
}

export default ContentRowProducts;