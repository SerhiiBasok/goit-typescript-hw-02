import PropTypes from "prop-types";
import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ imageUrl, alt, onClick }) => {
  return (
    <li className={css.card}>
      <div className={css.container}>
        <img
          src={imageUrl}
          alt={alt}
          onClick={onClick}
          width="320"
          height="200"
        />
      </div>
    </li>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
