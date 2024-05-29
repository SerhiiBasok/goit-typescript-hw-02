import React from "react";

interface GalleryImage {
  id: string;
  alt: string;
  small: string;
  regular: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  onClick: (image: GalleryImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => (
  <div className="image-gallery">
    {images.map((image) => (
      <img
        key={image.id}
        src={image.small}
        alt={image.alt}
        onClick={() => onClick(image)}
      />
    ))}
  </div>
);

export default ImageGallery;
