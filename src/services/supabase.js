import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hznzkbroxpmyydqtvlji.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bnprYnJveHBteXlkcXR2bGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MDM1NzIsImV4cCI6MjAyMDQ3OTU3Mn0.nCZ_7IWJTu1sLgGvVD914ZkB1D1qAiR74lEojHbYOkw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
