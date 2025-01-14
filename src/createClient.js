
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kqajraddatqbgrrmlksn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYWpyYWRkYXRxYmdycm1sa3NuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQwMjA5NiwiZXhwIjoyMDUxOTc4MDk2fQ.aa9H6fZrsFTQoxwa-TLvKbUvDrQ8AsWxPQ1y3O4qnyk'
export  const supabase = createClient(supabaseUrl, supabaseKey) 