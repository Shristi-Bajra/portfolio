const { supabase } = require("../supabaseClient");

const getHeroSection = async () => {
  const { data, error } = await supabase
    .from("herosection")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) throw error;
  return data[0];
};

const updateHeroSection = async (heroData) => {
  const { data, error } = await supabase
    .from("herosection")
    .update(heroData)
    .eq("id", heroData.id)
    .select();

  if (error) throw error;
  return data[0];
};

const createHeroSection = async (heroData) => {
  const { data, error } = await supabase
    .from("herosection")
    .insert([heroData])
    .select();

  if (error) throw error;
  return data[0];
};

module.exports = {
  getHeroSection,
  updateHeroSection,
  createHeroSection,
};
