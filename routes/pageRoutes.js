import express from "express";
import Page from "../models/Page.js";

const router = express.Router();

/* GET PAGE DATA */
router.get("/:pageType", async (req, res) => {
  try {
    const page = await Page.findOne({ pageType: req.params.pageType });
    res.json(page);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* CREATE / UPDATE PAGE */
router.post("/", async (req, res) => {
  try {
    const page = await Page.findOneAndUpdate(
      { pageType: req.body.pageType },
      req.body,
      { upsert: true, new: true }
    );
    res.json(page);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
