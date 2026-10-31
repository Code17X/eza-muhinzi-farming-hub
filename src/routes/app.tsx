import { useEffect } from "react";
import { createFileRoute, Link, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { Sprout, LogOut } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useAuth } from "@/features/auth/auth-context";
import { getSupabase } from "@/lib/supabase";
import { useI18n } from "@/i18n/i18n";

export const Route = createFileRoute("/app")({
  beforeLoad: async () => {
    if (typeof window !== "undefined") {
      const supabase = getSupabase();
      const { data } = supabase ? await supabase.getSession() : { data: { session: null } };
      if (!data.session) throw redirect({ to: "/login" });
    }
  },
  component: AppLayout,
});
function AppLayout() {
  const { session, loading, configured } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  useEffect(() => { if (!loading && (!configured || !session)) void navigate({ to: "/login", replace: true }); }, [loading, configured, session, navigate]);
  const signOut = async () => { await getSupabase()?.signOut(); await navigate({ to: "/" }); };
  if (loading || !configured || !session) return <main className="app-loading" aria-live="polite">{t("loading")}</main>;
  return <div className="app-shell">
    <header className="app-header"><Link className="brand-mark" to="/app"><span className="brand-symbol"><Sprout size={19}/></span><span>{t("brand")}</span></Link><nav className="app-nav"><Link to="/app">{t("dashboard")}</Link></nav><div className="app-header-actions"><LanguageSwitcher /><button className="button button-quiet" onClick={signOut}><LogOut size={16}/><span>{t("signOut")}</span></button></div></header>
    <main className="app-content"><div className="app-welcome-card"><div className="app-icon"><Sprout size={26}/></div><p className="eyebrow">{t("dashboard")}</p><h1>{t("appWelcome")}</h1><p>{t("appBody")}</p><span className="account-email">{session?.user.email}</span></div><Outlet /></main>
  </div>;
}
