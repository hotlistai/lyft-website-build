"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

let cachedClient: SupabaseClient<Database> | null = null;

export function getSupabaseClient(): SupabaseClient<Database> | null {
  if (cachedClient) return cachedClient;
  if (typeof window === "undefined") return null;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  cachedClient = createClient<Database>(url, anonKey, {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    },
  });

  return cachedClient;
}
