import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Auto = {
  id: string;
  user_id: string;
  marca: string;
  modelo: string;
  anio: number | null;
  estilo: string | null;
  motor: string | null;
  color: string;
  favorito: boolean;
  created_at: string;
};
