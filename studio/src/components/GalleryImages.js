import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Footer from "./Footer";

const GalleryImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
  try {
    const response = await fetch(
      "https://gallery-backend-for-studio-3.onrender.com/images"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch gallery data");
    }
    const data = await response.json();

    // Simulate slow response
    setTimeout(() => {
      setImages(data);
      setLoading(false); // Ensure this is delayed
    }, 3000); // 3-second delay
  } catch (err) {
    setError(err.message);
    setLoading(false);
  }
};
  console.log("Loading:", loading);


  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div className="Gallery-background-color">
      <div className="Gallery-thumb">
        <h2>
          <span className="thumb_letter">O</span>ur Images
        </h2>
      </div>
      <div className="gallery-album">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.image_url}
              alt={image.title}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default GalleryImages;
