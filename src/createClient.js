import { createClient } from "@supabase/supabase-js";

export const supabase= createClient(
    "https://kqajraddatqbgrrmlksn.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYWpyYWRkYXRxYmdycm1sa3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MDIwOTYsImV4cCI6MjA1MTk3ODA5Nn0.34fOiINEOLKXcAQ0Cvgfh8q1DxVpO-eQ5Aye3sl5DxQ")
