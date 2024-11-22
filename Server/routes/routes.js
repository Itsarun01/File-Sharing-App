import express from "express";
import {uploadImg} from "../controller/img-controller.js";
import {Router} from "express";

const router = express.Router();

router.post("/upload", uploadImg);

export default router;


