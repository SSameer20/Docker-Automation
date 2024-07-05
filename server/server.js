// server.js
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const mongoose = require('mongoose')
const { listImages } = require('./image');
const { createContainer, startContainer, stopContainer,  listContainers } = require('./container'); // Import functions from container.js
require('dotenv').config();

const app = express();

/// DB
const URI = process.env.MONGO_URI;
mongoose.connect(URI)
.then(() => console.log("Connected Successfully"))
.catch((err) => console.log("Error While Connecting " + err))




// Middleware
app.use(cors());
app.use(parser.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    const {email, password} = req.body;

  })

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/images", (req, res) => {
  const { flag } = req.query;

  listImages((err, images) => {
    if (err) {
      console.error('Error listing images:', err);
      return res.status(500).send({
        msg: "Error listing images",
      });
    }

    res.status(200).send({
      images: images,
    });
  });
});

app.post('/create', (req, res) => {
  const { image } = req.body;
  createContainer(image, (err, container) => {
    if (err) {
      console.error('Error creating container:', err);
      return res.status(500).send({
        msg: "Error creating container",
      });
    }
    res.status(200).send({
      msg: "Container created successfully",
      containerId: container.id
    });
  });
});

app.post('/start', (req, res) => {
  const { containerId } = req.body;
  startContainer(containerId, (err, data) => {
    if (err) {
      console.error('Error starting container:', err);
      return res.status(500).send({
        msg: "Error starting container",
      });
    }
    res.status(200).send({
      msg: "Container started successfully",
    });
  });
});

app.post('/stop', (req, res) => {
  const { containerId } = req.body;
  stopContainer(containerId, (err, data) => {
    if (err) {
      console.error('Error stopping container:', err);
      return res.status(500).send({
        msg: "Error stopping container",
      });
    }
    res.status(200).send({
      msg: "Container stopped successfully",
    });
  });
});

app.get("/containers", (req, res) => {
  listContainers((err, containers) => {
    if (err) {
      console.error('Error listing containers:', err);
      return res.status(500).send({
        msg: "Error listing containers",
      });
    }
    res.status(200).send({
      containers: containers,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
