import PropTypes from 'prop-types';
import { ImageItemStyle, ImageStyle } from './ImageItemStyled.styled';

export const ImageGalleryItem = ({ tags, webformatURL, openModal }) => {
  return (
    <ImageItemStyle onClick={openModal}>
      <ImageStyle src={webformatURL} alt={tags} loading="lazy" />
    </ImageItemStyle>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
