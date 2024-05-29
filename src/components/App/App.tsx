import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";

interface GalleryImage {
  id: string;
  alt: string;
  small: string;
  regular: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [hasMoreImages, setHasMoreImages] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  async function fetchImages(query: string, pageNum: number) {
    try {
      setLoading(true);
      const apiKey = "wmfnsVc_DdNJUYvLvziU9AjLz2nPehfwjBFjdxGMITc";
      const params = {
        client_id: apiKey,
        query: query,
        orientation: "landscape",
        page: pageNum,
        per_page: 12,
      };
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/`,
        {
          params: params,
          headers: {
            Authorization: `Client-ID ${apiKey}`,
          },
        }
      );
      const normalizeData = response.data.results.map(
        ({ alt_description, id, urls }: any) => ({
          alt: alt_description,
          id,
          small: urls.small,
          regular: urls.regular,
        })
      );

      if (pageNum === 1) {
        setImages(normalizeData);
      } else {
        setImages((prevImages) => [...prevImages, ...normalizeData]);
      }

      setError("");

      if (response.data.results.length === 0) {
        setHasMoreImages(false);
      }
    } catch (error) {
      setError("Error fetching images. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (query !== "") {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}
      {hasMoreImages && images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal
          images={selectedImage}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
