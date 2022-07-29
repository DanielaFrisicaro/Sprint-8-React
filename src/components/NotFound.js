import React from 'react';
import imagenFondo from '../assets/images/valla-en-ciudad-05.jpeg';

function NotFound(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Valla Ciudad NOT FOUND "/>
        </div>
        
    )
}


export default NotFound;