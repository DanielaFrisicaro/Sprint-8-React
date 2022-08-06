import React from 'react';

import imagen404 from '../assets/images/404_v02.webp'

function NotFound(){
    return(
        <div className="text-center">
                  <h1> ERROR 404 - ALGO HA FALLADO</h1>
          
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 55 +'rem'}} src={imagen404} alt=" ERROR 404 NOT FOUND "/>
        </div>
        
    )
}


export default NotFound;