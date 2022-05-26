//use models we created, here.
import mongoose from "mongoose";
import express from "express";
import STORY from "../models/storyTemps.js";

export const getStoryTemps = async (req, res) => {
  console.log(req.body, "getting stories..");
  try {
    const storyTemps = await STORY.find();
    res.json(storyTemps);
  } catch (error) {
    console.error(error);
  }
};

/*
export const createStoryTemp = (done) => {
  console.log(req.body, "creating story..");
  const { storyBody } = req.body;
  const newStory = new STORY({
    body: storyBody,
  });
  newStory.save((err, data) => {
    err ? console.error(err) : done(null, data);
  });
};
*/
//  VS.

export const createStoryPost = async (req, res) => {
  const { body } = req.body;
  const newStory = new STORY({
    body,
  });
  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    console.log(error);
  }
};
