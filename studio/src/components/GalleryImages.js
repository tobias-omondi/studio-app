import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { ColumnsPhotoAlbum } from "react-photo-album";

const GalleryImages = () => {
  // State to store gallery images
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch gallery data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://gallery-backend-for-studio-3.onrender.com/images"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch gallery data");
      }
      const data = await response.json();

      // Map the data to the format expected by PhotoAlbum
      const formattedImages = data.map((image) => ({
        src: image.image_url,
        width: 800, // Default width (you can use actual image dimensions if available)
        height: 600, // Default height
        title: image.title,
      }));

      setImages(formattedImages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Gallery-background-color">
      <div className="Gallery-thumb">
        <h2>
          <span className="thumb_letter">O</span>ur Images
        </h2>
      </div>
      <div className="gallery-album">
        <ColumnsPhotoAlbum
          photos={images}
          columns={1} // Force a single row
        />
      </div>
    </div>
  );
};

export default GalleryImages;