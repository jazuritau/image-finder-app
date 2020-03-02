import React from 'react'

const Paginacion = props => {
    return (
        <div>
            <button onClick={props.backPage} type="button" className="btn btn-info mr-1">&larr; Anterior</button>
            <button onClick={props.nextPage} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion