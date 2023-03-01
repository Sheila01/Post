import React from 'react';
const Img = (props) => {
  return(
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='card'>
        <img src={props.img.previewURL}/>
      </div>
     
    </div> 
  )
}

export default Img