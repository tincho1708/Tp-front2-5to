-- Tabla de autos de cada usuario
CREATE TABLE IF NOT EXISTS public.autos (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  marca      text NOT NULL,
  modelo     text NOT NULL,
  anio       integer,
  estilo     text,
  motor      text,
  color      text DEFAULT '#39ff14',
  favorito   boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);

-- Row Level Security: cada usuario solo ve sus propios autos
ALTER TABLE public.autos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_own_autos" ON public.autos
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "insert_own_autos" ON public.autos
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "update_own_autos" ON public.autos
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "delete_own_autos" ON public.autos
  FOR DELETE USING (auth.uid() = user_id);

-- Permisos de tabla por rol
GRANT SELECT, INSERT, UPDATE, DELETE ON public.autos TO authenticated;
GRANT SELECT ON public.autos TO anon;
