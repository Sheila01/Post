import React, { Component } from 'react';
/*const Search = () => {

  const busquedaRef = React.createRef()
  const obtenerDatos = (e) => {
    state = {
      finish:''
    }
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
export default Search;*/

class Search extends Component {
  busquedaRef = React.createRef();
  obtenerDatos = (e) => {
    e.preventeDefault()
    state = {
      finish: '',
    };
    e.preventeDefault();
    const finish = this.busquedaRef.current.value;
    this.props.obtenerDatos(finish);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.obtenerDatos}>
          <div className='row'>
            <div className='form-group col-md-8'>
              <input ref={this.busquedaRef} type='text' className='form-control form-control-lg' placeholder='Search img' />
            </div>
            <div className='form-group col-md-4'>
              <input type='submit' className='btn btn-lg btn-danger' placeholder='Search img' />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
