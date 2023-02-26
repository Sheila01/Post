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
    if(img.length === 0){
      return null
    }
    console.log(img)
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