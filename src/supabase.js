import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oiigzddivlhvbefzctav.supabase.co'
const supabaseAnonKey = 'sb_publishable_SwkT1cBDjv9--p1XEfs92g_zhldXZI_'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
