create table if not exists public.market_prices (
  id text primary key,
  name jsonb not null,
  aliases jsonb not null default '{"en":[],"rw":[]}'::jsonb,
  price_rwf integer not null check (price_rwf > 0),
  unit jsonb not null,
  market jsonb not null,
  updated_at date not null default current_date,
  source text not null,
  active boolean not null default true,
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);
alter table public.market_prices enable row level security;
create policy "Anyone can read active market prices" on public.market_prices for select using (active or (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "Admins manage market prices" on public.market_prices for all using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
insert into public.market_prices (id,name,aliases,price_rwf,unit,market,updated_at,source) values
('maize','{"en":"Maize","rw":"Ibigori"}','{"en":["corn"],"rw":[]}',556,'{"en":"kg","rw":"kg"}','{"en":"Rwanda · national median","rw":"U Rwanda · impuzandengo y’igihugu"}','2026-08-31','WFP VAM via HDX'),
('beans','{"en":"Dry beans","rw":"Ibishyimbo byumye"}','{"en":["beans"],"rw":["ibishyimbo"]}',922,'{"en":"kg","rw":"kg"}','{"en":"Rwanda · national median","rw":"U Rwanda · impuzandengo y’igihugu"}','2026-08-31','WFP VAM via HDX'),
('irish-potatoes','{"en":"Irish potatoes","rw":"Ibirayi"}','{"en":["potatoes"],"rw":[]}',600,'{"en":"kg","rw":"kg"}','{"en":"Rwanda · national median","rw":"U Rwanda · impuzandengo y’igihugu"}','2026-08-31','WFP VAM via HDX')
on conflict (id) do nothing;
