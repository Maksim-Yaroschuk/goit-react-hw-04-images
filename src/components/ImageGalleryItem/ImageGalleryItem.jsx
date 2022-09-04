import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className={css.galleryItem} key={id}>
      <img className={css.galleryItemImage} src={webformatURL} alt="" />
    </li>
  );
};
