import React from 'react';
import LastProductInDb from './LastProductInDb';
import ContentRowProducts from './ContentRowProducts';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Ultimo Producto en Base de datos -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-warning-800">App Dashboard Fence</h1>
					</div>
				
					{/*<!-- Content Row Products-->*/}
					<ContentRowProducts />
					<LastProductInDb />
				
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;