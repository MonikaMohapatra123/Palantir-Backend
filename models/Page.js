import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  heading: String,
  title: String,
  description: String,
  buttonText: String,
  buttonLink: String,
});

const pageSchema = new mongoose.Schema({
  pageType: {
    type: String,
    required: true,
    unique: true,
  },
  section1: sectionSchema,
  section2: sectionSchema,
  section3: sectionSchema,
});

export default mongoose.model("Page", pageSchema);
