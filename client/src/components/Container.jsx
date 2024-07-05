// ContainerManager.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-js-loader';
import '../style/container.css';
import Navigation from './Navigation';

export default function ContainerManager() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState('');
  const [containers, setContainers] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/images', {
        params: { flag: true },
      });
      const fetchedImages = res.data.images || [];
      setImages(fetchedImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchContainers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/containers');
      const fetchedContainers = res.data.containers || [];
      setContainers(fetchedContainers);
    } catch (error) {
      console.error('Error fetching containers:', error);
    }
  };

  const createContainer = async () => {
    try {
      const res = await axios.post('http://localhost:5000/create', {
        image: newImage,
      });
      alert(`Container created: ${res.data.containerId}`);
      fetchContainers(); // Refresh container list
    } catch (error) {
      console.error('Error creating container:', error);
    }
  };

  const startContainer = async (containerId) => {
    try {
      await axios.post('http://localhost:5000/start', { containerId });
      alert('Container started');
      fetchContainers(); // Refresh container list
    } catch (error) {
      console.error('Error starting container:', error);
    }
  };

  const stopContainer = async (containerId) => {
    try {
      await axios.post('http://localhost:5000/stop', { containerId });
      alert('Container stopped');
      fetchContainers(); // Refresh container list
    } catch (error) {
      console.error('Error stopping container:', error);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchContainers();
    setLoading(false);
  }, []);

  return loading ? (
    <div className="Loader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Loader type="spinner-default" bgColor="white" />
    </div>
  ) : (
    <>
    <Navigation />
    <div className="container-manager">
      <h2>Docker Container Manager</h2>

      <div className="image-list">
        <h3>Available Docker Images</h3>
        <table id="info">
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
                <td>{new Date(image.Created * 1000).toLocaleString()}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container-actions">
        <h3>Create Container</h3>
        <input
          type="text"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          placeholder="Enter image name"
          />
        <button onClick={createContainer}>Create Container</button>
      </div>

      <div className="container-list">
        <h3>Manage Containers</h3>
        <table id="info">
          <thead>
            <tr>
              <th>Container ID</th>
              <th>Image</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {containers.map((container, index) => (
              <tr key={index}>
                <td>{container.Id}</td>
                <td>{container.Image}</td>
                <td>{container.State}</td>
                <td>
                  <button onClick={() => startContainer(container.Id)}>Start</button>
                  <button onClick={() => stopContainer(container.Id)}>Stop</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
                </>
  );
}
