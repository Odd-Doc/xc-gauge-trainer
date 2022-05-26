import mongoose from "mongoose";

//create story schema
const storySchema = mongoose.Schema({
  title: String,
  author: String,
  blanks: Number,
  body: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const STORY = mongoose.model("Story", storySchema);
//We are exporting a mongoose model from this file
export default STORY;
