import React from 'react';
const Search = () => {
  const busquedaRef = React.createRef()
  const obtenerDatos = (e) => {
    e.preventeDefault()
    const finish = this.busquedaRef.current.value
    this.props.obtenerDatos(finish)
  }
  return (
    <div>
      <form onSubmit={obtenerDatos}>
        <div className='row'>
          <div className='form-group col-md-8'>
            <input ref={busquedaRef} type='text' className='form-control form-control-lg' placeholder='Search img'/>
          </div>
          <div className='form-group col-md-4'>
            <input type='submit' className='btn btn-lg btn-danger' placeholder='Search img'/>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
