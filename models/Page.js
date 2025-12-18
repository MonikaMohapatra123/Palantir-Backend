import mongoose from "mongoose";

/* card item */
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
});

/* page schema */
const pageSchema = new mongoose.Schema({
  pageType: String,     // "projects"
  category: String,     // "thermal", "solar", etc (dropdown value)

  section1: {
    heading: String,
    description: String,
  },

  section2: {
    heading: String,
    items: [itemSchema],
  },

  section3: {
    heading: String,
    items: [itemSchema],
  },
});

export default mongoose.model("Page", pageSchema);
