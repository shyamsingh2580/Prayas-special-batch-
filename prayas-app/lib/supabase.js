import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ycyzjemjwdyugczttzwo.supabase.co'
const supabaseKey = 'YAHAN_APNI_ANON_KEY_PASTE_KARO'

export const supabase = createClient(supabaseUrl, supabaseKey)
