import React, { useEffect, useState } from 'react';

const GalleryImages = () => {
  // State to store gallery images
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch gallery data
  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/images');  // Change to your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch gallery data');
      }
      const data = await response.json();
      setImages(data);  // Assuming your API returns an array of images
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Our Images</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.file_url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
