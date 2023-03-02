import Search from './Search';
import React, { Component } from 'react';
import Result from './Result';
//import axios from 'axios'

/*const AppTwo = () => {
  state = {
    finish: ''
  }
    const datosBusqueda = (termino) => {
    console.log(termino)
  }
  return(
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">TConseguido his is search</p>
        <Search datosBusqueda={datosBusqueda}/>
      </div>
    </div>
  )
}

export default AppTwo*/

class AppTwo extends Component {
  state = {
    finish: '',
    img: [],
    page: ''
  };
  paginaAnterior = () => {
    console.log('Anterior...')
  }
  paginaSiguiente = () => {
    let page = this.state.page
    page += 1
    console.log(page)
  }
  consultarApi = () => {
    const finish = this.state.finish;
    const url = `https://pixabay.com/api/?key=33950841-2c471b5be87049afe6989d25f&q=${finish}&per_page=30`;
    /* axios.url('http://localhost:3000/')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });*/
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((result) => this.setState({ img: result.hits }));
  };
  datosBusqueda = (finish) => {
    this.setState(
      {
        finish: 'Finish',
        page: 1
      },
      () => {
        this.consultarApi();
      }
    );
  };
  render() {
    return (
      <div className='app container'>
        <div className='jumbotron'>
          <p className='lead text-center'>This is search</p>
          <Search datosBusqueda={this.datosBusqueda} />
        </div>
        <div className='row justify-content-center'>
          <Result img={this.state.img} paginaAnterior={this.paginaAnterior} paginaSiguiente={this.paginaSiguiente}/>
        </div>
      </div>
    );
  }
}
export default AppTwo;
