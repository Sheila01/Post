import React from 'react';
const Img = (props) => {
  const { largeImageURL, likes, previewURL, tags, views } = props.i;
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='card'>
        <img src={previewURL} alt={tags} className='card-img-top' />
        <div className='card-body'>
          <p className='card-text'>{likes} Likes </p>
          <p className='card-text'>{views} Views </p>
          <a href={largeImageURL} rel="noreferrer" target="_blank" className='btn btn-primary btn-block'>
            See image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Img;
