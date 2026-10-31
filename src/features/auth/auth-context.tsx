import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getSupabase, type SupabaseSession } from "@/lib/supabase";

type AuthValue = { session: SupabaseSession | null; loading: boolean; configured: boolean };
const AuthContext = createContext<AuthValue | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
  const supabase = getSupabase();
  const [session, setSession] = useState<SupabaseSession | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    let active = true;
    supabase.getSession().then(({ data }) => { if (active) { setSession(data.session); setLoading(false); } });
    const { data: { subscription } } = supabase.onAuthStateChange((_event, nextSession) => { setSession(nextSession); setLoading(false); });
    return () => { active = false; subscription.unsubscribe(); };
  }, [supabase]);
  const value = useMemo(() => ({ session, loading, configured: Boolean(supabase) }), [session, loading, supabase]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
