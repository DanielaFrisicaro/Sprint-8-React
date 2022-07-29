import React from 'react';
import DetalleProductosInDb from './DetalleProductosInDb';
import ProductsInDb from './ProductsInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <DetalleProductosInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <ProductsInDb />

        </div>
    )
}

export default ContentRowCenter;