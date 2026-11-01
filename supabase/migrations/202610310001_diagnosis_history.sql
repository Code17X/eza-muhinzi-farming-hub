create table if not exists public.diagnosis_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  crop_name text not null,
  result jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists diagnosis_history_user_created_idx
  on public.diagnosis_history (user_id, created_at desc);

alter table public.diagnosis_history enable row level security;

grant select, insert on public.diagnosis_history to authenticated;

create policy "Farmers can read their diagnosis history"
  on public.diagnosis_history for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "Farmers can save their own diagnoses"
  on public.diagnosis_history for insert to authenticated
  with check ((select auth.uid()) = user_id);
