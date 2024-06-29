// Images.jsx

import React, { useEffect, useState } from 'react';
import Loader from "react-js-loader";
import axios from 'axios';
import "../style/image.css";

export default function Images() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/images", {
        params: {
          flag: true
        }
      });

      const fetchedImages = res.data.images || [];
      console.log("Fetched Images:", fetchedImages);
      setImages(fetchedImages);
      setLoading(false); // Set loading to false once images are fetched
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false); // Set loading to false on error
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="image-info">
      <h2>Docker Images</h2>
      {loading ? (
        <div className="Loader" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
          <Loader type="spinner-default" bgColor="white" />
        </div>
      ) : (
        <div className="image-list">
          <table id='info'>
            <thead>
              <tr>
                <th>Image ID</th>
                <th>Repo Tags</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {images.map((image, index) => (
                <tr key={index}>
                  <td>{image.Id}</td>
                  <td>{image.RepoTags.join(', ')}</td>
                  <td>{image.Created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
