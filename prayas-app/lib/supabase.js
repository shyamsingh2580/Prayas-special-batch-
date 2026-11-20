import { createClient } from '@supabase/supabase-js'

// Direct keys (Vercel par bhi yeh chalenge)
const supabaseUrl = 'https://krxikxaoameewvbhxfcn.supabase.co'
const supabaseKey = 'sb_publishable_GzGrEAS-EPtKta1lQOaCoQ_KppBVUAv'

export const supabase = createClient(supabaseUrl, supabaseKey) 