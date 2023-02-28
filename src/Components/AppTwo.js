import Search from './Search'
import React, {Component} from 'react'
import Result from './Result'
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

class AppTwo extends Component{
  state = {
    finish: '',
    img: []
  }
  consultarApi= () => {
    const finish = this.state.finish
    const url = `https://pixabay.com/api/?key=33950841-2c471b5be87049afe6989d25f&q=${finish}&per_page=30`
   /* axios.url('http://localhost:3000/')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });*/
    fetch(url)
     .then(respuesta => respuesta.json())
     .then(result => this.setState({img: result.hits}))
  }
  datosBusqueda = (finish) => {
    this.setState({
      finish
    }, () => {
      this.consultarApi()
    })
  }
  render(){
    return(
      <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">This is search</p>
        <Search datosBusqueda={this.datosBusqueda}/>
      </div>
      <Result img={this.state.img}/>
    </div>
    )
  }
}
export default AppTwo