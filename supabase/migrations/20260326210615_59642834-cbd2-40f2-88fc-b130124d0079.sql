CREATE TABLE public.garbage_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('inquiry', 'bin')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  island TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.garbage_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON public.garbage_inquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow admin reads" ON public.garbage_inquiries
  FOR SELECT TO authenticated
  USING (true);