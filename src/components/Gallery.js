import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import './Gallery.css';

import Title from './Title';
// import images from '../../public/images/';

const PHOTO_SET = [
  {
    src: 'images/les-perruches-exterieur1.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/les-perruches-exterieur2.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/les-perruches-cuisine1.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/les-perruches-cuisine2.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/les-perruches-chambre-etage1.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/les-perruches-chambre-etage2.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/les-perruches-salon-rdc1.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/les-perruches-salle-manger-rdc1.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'images/gite-les-perruches-salle1.JPG',
    width: 4,
    height: 3
  }
];

class Galleryy extends React.Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
  	return (
      <div id="gallery" className="App-Galery">
        <Title>Photos</Title>
        <Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
        <Lightbox images={PHOTO_SET}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
  	);
  }
}

export default Galleryy;
