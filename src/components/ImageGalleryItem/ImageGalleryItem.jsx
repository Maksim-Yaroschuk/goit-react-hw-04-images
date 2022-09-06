import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, getLargeImg, largeImageURL }) => {
  return (
    <li className={css.galleryItem}>
      <img onClick={() => getLargeImg(largeImageURL)} className={css.galleryItemImage} src={webformatURL} alt="" />
    </li>
  );
};
