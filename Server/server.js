import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import dbConnection from "./database/db.js";

// Create express app

const server = express();

server.use(cors());
server.use("/", router);

// Setup server port

const PORT = 8080;

dbConnection();

// listen for requests

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
