const express = require("express");
const { createHeroSection, getHeroSection, updateHeroSection } = require("../models/heroSection");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log('GET /hero - Fetching hero section');
    const hero = await getHeroSection();
    console.log('GET /hero - Success:', hero);
    // Return null if no data instead of undefined
    res.json(hero || null);
  } catch (err) {
    console.error('GET /hero - Error:', err);
    console.error('GET /hero - Error stack:', err.stack);
    res.status(500).json({ error: err.message, details: err.stack });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log('POST /hero - Creating hero section:', req.body);
    const hero = await createHeroSection(req.body);
    console.log('POST /hero - Success:', hero);
    res.json(hero);
  } catch (error) {
    console.error('POST /hero - Error:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async(req, res) => {
    try {
        console.log('PUT /hero/:id - Updating hero section:', req.params.id, req.body);
        const hero = await updateHeroSection({
            id: req.params.id,
            ...req.body
        });
        console.log('PUT /hero/:id - Success:', hero);
        res.json(hero);
    } catch (error) {
        console.error('PUT /hero/:id - Error:', error);
        res.status(500).json({error: error.message});
    }
})

module.exports = router;