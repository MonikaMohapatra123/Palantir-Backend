import express from "express";
import Page from "../models/Page.js";

const router = express.Router();

/* GET page by dropdown */
router.get("/:pageType/:category", async (req, res) => {
  try {
    const page = await Page.findOne({
      pageType: req.params.pageType,
      category: req.params.category,
    });
    res.json(page);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* CREATE or UPDATE page */
router.post("/", async (req, res) => {
  try {
    const page = await Page.findOneAndUpdate(
      {
        pageType: req.body.pageType,
        category: req.body.category,
      },
      req.body,
      { new: true, upsert: true }
    );
    res.json(page);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
