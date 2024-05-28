import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  small: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
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

export default ImageGallery;
