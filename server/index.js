const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {createClient} = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
})

const projectRoutes = require("./routes/Project");
app.use("/projects", projectRoutes);

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});