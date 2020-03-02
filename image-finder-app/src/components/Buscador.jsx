import React, { Component } from 'react'

class Buscador extends Component {

    searchRef = React.createRef()

    handleData = (e) => {
        e.preventDefault()

        // Tomamos el valor del input
        const data = this.searchRef.current.value
        
        // Lo enviamos al componente principal
        this.props.inputData(data)
    }

    render() {
        return( 
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen... Ejemplo: Dragon "/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador