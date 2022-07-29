import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Nombre: 'Billy Elliot ',
        Precio: '123',
        Descripcion: '5',
        Categories: ['Drama','Comedia'],
       // Imagen: 
    },
    {
        Nombre: 'Alicia en el país de las maravillas',
        Precio: '142',
        Descripcion: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        //Imagen: 
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>xxx</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>XXX</th>
                                <th>Imagen</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;