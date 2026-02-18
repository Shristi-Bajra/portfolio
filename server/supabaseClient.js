const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabasekey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabasekey);

module.exports = { supabase };
