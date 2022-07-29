import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let Products = {
    title: 'Productos en la Base de Datos',
    color: 'danger', 
    cuantity: 15,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let Users = {
    title:' Usuarios', 
    color:'danger', 
    cuantity: '10',
    icon:'fa-user-check'
}

/* <!-- Actors quantity --> */

let Categories = {
    title:'Categorias' ,
    color:'danger',
    cuantity:'30',
    icon:"far fa-list"
}

let cartProps = [Products, Users, Categories];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;