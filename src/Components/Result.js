import React, { Component } from 'react';
import Img from './Img';
import WebSite from './WebSite';

/*const Result = () => {
   const mostrarImg = () => {
    console.log(this.props.img)
  }
  return(
    <div>
    <React.Fragment>
    {this.mostrarImg()}
    </React.Fragment>
    </div>
  )
}
export default Result*/

class Result extends Component {
  mostrarImg = () => {
    const img = this.props.img;
    if (img.length === 0) return null;
    console.log(img);
    return (
      <React.Fragment>
        <div className='col-12 p-5 row'>
          {img.map(i => (
            <Img key={img.id} i={i} />
          ))}
        </div>
        <WebSite paginaAnterior={this.props.paginaAnterior} paginaSiguiente={this.props.paginaSiguiente}/>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.mostrarImg()}</React.Fragment>;
  }
}
export default Result;
