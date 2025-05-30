import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-js-loader';
import '../style/container.css';
import Navigation from './Navigation';

export default function ContainerManager() {
  const [loading, setLoading] = useState(true);
  const [newImage, setNewImage] = useState('');
  const [newName, setNewName] = useState('');
  const [containers, setContainers] = useState([]);

  const fetchContainers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/list');
      const fetchedContainers = res.data || [];
      setContainers(fetchedContainers);
    } catch (error) {
      console.error('Error fetching containers:', error);
    }
  };

  const createContainer = async () => {
    try {
      const res = await axios.post('http://localhost:5000/create', {
        image: newImage,
        name: newName,
      });
      alert(`Container created: ${res.data.containerId}`);
      fetchContainers();
    } catch (error) {
      console.error('Error creating container:', error);
    }
  };

  const startContainer = async (containerId) => {
    try {
      await axios.post(`http://localhost:5000/start/${containerId}`);
      alert('Container started');
      fetchContainers();
    } catch (error) {
      console.error('Error starting container:', error);
    }
  };

  const stopContainer = async (containerId) => {
    try {
      await axios.post(`http://localhost:5000/stop/${containerId}`);
      alert('Container stopped');
      fetchContainers();
    } catch (error) {
      console.error('Error stopping container:', error);
    }
  };

  const removeContainer = async (containerId) => {
    try {
      await axios.delete(`http://localhost:5000/remove/${containerId}`);
      alert('Container removed');
      fetchContainers();
    } catch (error) {
      console.error('Error removing container:', error);
    }
  };

  useEffect(() => {
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

        <div className="container-actions">
          <h3>Create Container</h3>
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            placeholder="Enter image name"
          />
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter container name (optional)"
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
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {containers.map((container, index) => (
                <tr key={index}>
                  <td>{container.Id}</td>
                  <td>{container.Image}</td>
                  <td>{container.State}</td>
                  <td>{container.Status}</td>
                  <td>
                    <button onClick={() => startContainer(container.Id)}>Start</button>
                    <button onClick={() => stopContainer(container.Id)}>Stop</button>
                    <button onClick={() => removeContainer(container.Id)}>Remove</button>
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
