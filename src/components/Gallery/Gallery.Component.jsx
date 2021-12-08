import React from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import { Fastfood } from "@material-ui/icons";

const Gallery = () => {
  const [images, setImages] = React.useState(null);

  const [state, setState] = React.useState({

      showIndex: true,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 3000,
      slideInterval: 3000,
      slideOnThumbnailOver: true,
      thumbnailPosition: 'left',
      showVideo: {},
      useWindowKeyDown: true,


  });






  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map(url => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);

  return images ? <ImageGallery 
  items={images}
  onClick={() => console.log("onClick")}
  onImageLoad={() => console.log("onImageLoad")}
  onSlide={() => console.log("onSlide")}
  onPause={() => console.log("onPause")}
  onScreenChange={(isFullScreen) =>
     setState({...state, 
      thumbnailPosition:isFullScreen?'bottom':'left',
      showNav : !isFullScreen
    })}
  onPlay={() => console.log("onPlay")}
  infinite={state.infinite}
  showBullets={state.showBullets}
  showFullscreenButton={state.showFullscreenButton}
  showPlayButton={state.showPlayButton}
  showThumbnails={state.showThumbnails}
  showIndex={state.showIndex}
  showNav={state.showNav}
  isRTL={state.isRTL}
  thumbnailPosition={state.thumbnailPosition}
  slideDuration={parseInt(state.slideDuration)}
  slideInterval={parseInt(state.slideInterval)}
  slideOnThumbnailOver={state.slideOnThumbnailOver}
  additionalClass="app-image-gallery"
  useWindowKeyDown={state.useWindowKeyDown} 
  /> : null;
};


export default Gallery;
