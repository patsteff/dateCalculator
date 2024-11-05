import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://sacprijauphrnolxnsgg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhY3ByaWphdXBocm5vbHhuc2dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NDkxNjYsImV4cCI6MjA0NjMyNTE2Nn0.QfueXxAkcPHhqdL3_VrVaJtVaIWej0eStBlqiWVpPLM')
