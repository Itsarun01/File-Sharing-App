import express from "express";

// Create express app

const server = express();

// Setup server port

const PORT = 8080;

// listen for requests

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
