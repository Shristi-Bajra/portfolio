const express = require("express");
const router = express.Router();
const { createrClient, createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.post("/", async (req, res) => {
    const {title, description, link} = req.body;
    const {data, error} = await supabase
    .from("projects")
    .insert([{title, description, link}]);
    if(error) return res.status(500).json({error: error.message});
    res.json(data);
})

module.exports = router;