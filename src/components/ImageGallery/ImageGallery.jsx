import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imageUrl={image.small}
          alt={image.alt}
          onClick={() => onClick(image)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      small: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
