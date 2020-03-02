import React, { Component } from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: '',
      images: [],
      pagina: ''
    }
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron')
    element.scrollIntoView({block: "start", behavior: "smooth"})
  }

  backPage = () => {
    // Leer el state de la pagina actual
    let page = this.state.page

    // Si la pagina es igual a 1, ya no ir hacia atras
    if(page === 1) return null

    // sumar uno a la pagina actual
    page -= 1

    // agregar el cambio al state
    this.setState({
      page
    }, () => {
      this.consultApi()
      this.scroll()
    })

  }

  nextPage = () => {
    // Leer el state de la pagina actual
    let page = this.state.page

    // sumar uno a la pagina actual
    page += 1

    // agregar el cambio al state
    this.setState({
      page
    }, () => {
      this.consultApi()
      this.scroll()
    })

  }

  consultApi = () => {
    const DATA = this.state.data
    const API_KEY = '1680832-74d43234194527aae929c2be5'
    const page = this.state.page
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${DATA}&per_page=30&page=${page}`

    fetch(URL)
      .then(response => response.json())
      .then(result => this.setState({images: result.hits}))
  }

  inputData = (data) => {
    this.setState({
      data: data,
      page: 1
    }, () => {
      this.consultApi()
    } )
}

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="h1 text-center">Buscador de Imágenes</h1>

          <Buscador
            inputData={this.inputData}
          />

        </div>
        <div className="row justify-content-center">
          <Resultado
            images={this.state.images}
            backPage={this.backPage}
            nextPage={this.nextPage}
          />
        </div>

      </div>
    );
  }  
}

export default App;
