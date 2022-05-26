//routes>blankStories
import express from "express";
const router = express.Router();
import { getStoryTemps, createStoryPost } from "../controllers/storyTemps.js";
//localhost:xxxx/posts

router.post("/", createStoryPost);
export default router;
