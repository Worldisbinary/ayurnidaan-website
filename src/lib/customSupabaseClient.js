import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://porjsqkoxwfhckwndukt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcmpzcWtveHdmaGNrd25kdWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjE0NzgsImV4cCI6MjA2OTAzNzQ3OH0.1u9g63ZhHgalmuRedGV1DaKnr4EHTyTD8Zd2sH2hz_c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);