import React, {Component} from 'react';

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
    const img = this.props.img
      console.log('esto vaaaaa', img.length)
      if(img.length === 0) return null
      console.log(img.length, 'eeeeeee')
      return(
        <React.Fragment>
        <div className='col-12 p-5 row'>
        </div>
      </React.Fragment>
      )
  }
  render(){
    return(
      <React.Fragment>
    {this.mostrarImg()}
    </React.Fragment>
    )
  }
}
export default Result