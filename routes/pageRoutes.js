
import express from "express";
import Page from "../models/Page.js";

const router = express.Router();

/* =========================
   CREATE (Add new page)
========================= */
router.post("/", async (req, res) => {
  try {
    const page = new Page(req.body);
    await page.save();
    res.status(201).json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   READ – Get ALL pages
========================= */
router.get("/", async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   READ – Get page by type & category
========================= */
router.get("/:pageType/:category", async (req, res) => {
  try {
    const page = await Page.findOne({
      pageType: req.params.pageType,
      category: req.params.category,
    });

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   UPDATE – By ID
========================= */
router.put("/:id", async (req, res) => {
  try {
    const page = await Page.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   DELETE – By ID
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const page = await Page.findByIdAndDelete(req.params.id);

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.json({ message: "Page deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/* =========================
   READ – Navbar grouped data
========================= */
router.get("/navbar/grouped", async (req, res) => {
  try {
    const pages = await Page.find({}, "pageType category");

    const grouped = {};
    pages.forEach((p) => {
      if (!grouped[p.pageType]) {
        grouped[p.pageType] = [];
      }
      grouped[p.pageType].push(p.category);
    });

    res.json(grouped);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
