import Search from './Search'
import React, {Component} from 'react'

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
    finish: 'Cafe'
  }
  datosBusqueda = (finish) => {
    this.setState({
      finish
    })
  }
  render(){
    return(
      <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">This is search</p>
        <Search datosBusqueda={this.datosBusqueda}/>
      </div>
      {this.state.finish}
    </div>
    )
  }
}
export default AppTwo