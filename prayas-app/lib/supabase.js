import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://krxikxaoameewvbhxfcn.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_GzGrEAS-EPtKta1lQOaCoQ_KppBVUAv'
export const supabase = createClient(supabaseUrl, supabaseKey)