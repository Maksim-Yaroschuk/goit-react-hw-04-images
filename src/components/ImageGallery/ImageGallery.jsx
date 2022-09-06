import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, getLargeImg }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            getLargeImg={getLargeImg}
              id={id}
              key={webformatURL}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
        );
      })}
      </ul>
  );
};
