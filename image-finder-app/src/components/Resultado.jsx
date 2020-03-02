import React, { Component } from 'react'
import Card from './Card'
import Paginacion from './Paginacion'


class Resultado extends Component {
    displayImages = () => {

        const images = this.props.images

        if(images.length === 0) return null

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map(image => (
                        <Card 
                            key={image.id}
                            image={image}
                        
                        />
                    ))}
                </div>
                <Paginacion 
                    backPage={this.props.backPage}
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        )
    }

    render() { 
        return (
            <React.Fragment>
                {this.displayImages()}
            </React.Fragment>
        );
    }
}
 
export default Resultado ;