import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ images, onLargeImage }) => {
  return (
    <ImageGalleryStyle>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={nanoid()}
          // key={id}
          tags={tags}
          webformatURL={webformatURL}
          openModal={() => onLargeImage(largeImageURL)}
        />
      ))}
    </ImageGalleryStyle>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  onLargeImage: PropTypes.func.isRequired,
  // onLargeImage: PropTypes.func,
};
