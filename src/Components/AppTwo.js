import Search from './Search'

const AppTwo = () => {
    const datosBusqueda = (termino) => {
    console.log(termino)
  }
  return(
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">This is search</p>
        <Search datosBusqueda={datosBusqueda}/>
      </div>
    </div>
  )
}

export default AppTwo
