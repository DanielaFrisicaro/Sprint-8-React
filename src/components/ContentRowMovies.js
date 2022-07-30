import React, {useState,useEffect} from 'react';
import SmallCard from './SmallCard';
// Creando estado de usuarios
/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */ 
const url = 'api'
// let Products = {
//     title: 'Productos en la Base de Datos',
//     color: 'danger', 
//     cuantity: 15,
//     icon: 'fa-clipboard-list'
// }

// /* <!-- Total awards --> */

// let Users = {
//     title:' Usuarios', 
//     color:'danger', 
//     cuantity: '10',
//     icon:'fa-user-check'
// }

// /* <!-- Actors quantity --> */

// let Categories = {
//     title:'Categorias' ,
//     color:'danger',
//     cuantity:'30',
//     icon:"far fa-list"
// }

// let cartProps = [Products, Users, Categories];

function ContentRowMovies(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${url}/users`)
        .then(result => result.json())
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[users]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${url}/products`)
        .then(result => result.json())
        .then(result => setProducts(result.data))
        .catch(err => console.log(err))
    },[products]);

    return (
        <div className="row">
            <SmallCard  color='danger' icon='fa-user-check' title='Usuarios' cuantity={`${users.length}`}/>
            {/* {cartProps.map( (movie, i) => {
                return <SmallCard {...movie} key={i}/> */}
            {/* })} */}
            <SmallCard color='danger' icon='fa-clipboard-list'  title='Productos' cuantity={`${products.length}`}/>
            <SmallCard color='danger' icon='far fa-list' title='Categorías' cuantity='30' />
        </div>
    )
}

export default ContentRowMovies;