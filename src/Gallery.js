import React from 'react';

import './Gallery.css';

import images from './images/';

const Gallery = () =>
  <div id="gallery" className="App-Galery">
    <div className="App-Primary-Image">
      <img className="App-Image" src={images.exterieur1} />
    </div>
    <div className="App-Gallery-Images">
      <img className="App-Image" src={images.exterieur2} />
      <img className="App-Image" src={images.cuisine1} />
      <img className="App-Image" src={images.cuisine2} />
    </div>
    <div className="App-Gallery-Images">
      <img className="App-Image" src={images.exterieur2} />
      <img className="App-Image" src={images.cuisine1} />
      <img className="App-Image" src={images.cuisine2} />
    </div>
  </div>;

export default Gallery;
