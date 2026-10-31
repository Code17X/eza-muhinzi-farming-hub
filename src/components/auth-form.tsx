import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { getSupabase } from "@/lib/supabase";
import { useI18n } from "@/i18n/i18n";

type AuthFormProps = { mode: "login" | "signup" };
export function AuthForm({ mode }: AuthFormProps) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const isSignup = mode === "signup";
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError(""); setNotice("");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const supabase = getSupabase();
    if (!supabase) { setError(t("configMissing")); return; }
    if (isSignup && password !== String(form.get("confirmPassword") ?? "")) { setError(t("authError")); return; }
    setBusy(true);
    try {
      if (isSignup) {
        const { data, error: authError } = await supabase.signUp({ email, password, options: { data: { full_name: String(form.get("name") ?? "").trim() } } });
        if (authError) throw authError;
        if (data.session) await navigate({ to: "/app" }); else setNotice(t("checkEmail"));
      } else {
        const { error: authError } = await supabase.signInWithPassword({ email, password });
        if (authError) throw authError;
        await navigate({ to: "/app" });
      }
    } catch { setError(t("authError")); } finally { setBusy(false); }
  };
  return <main className="auth-page"><section className="auth-card">
    <Link to="/" className="brand-mark"><span className="brand-symbol">E</span><span>{t("brand")}</span></Link>
    <div className="auth-heading"><p className="eyebrow">{t("brand")}</p><h1>{isSignup ? t("signupTitle") : t("loginTitle")}</h1><p>{isSignup ? t("signupSubtitle") : t("loginSubtitle")}</p></div>
    <form className="auth-form" onSubmit={submit}>
      {isSignup && <label>{t("name")}<input name="name" type="text" autoComplete="name" required /></label>}
      <label>{t("email")}<input name="email" type="email" autoComplete="email" required /></label>
      <label>{t("password")}<input name="password" type="password" autoComplete={isSignup ? "new-password" : "current-password"} minLength={8} required /></label>
      {isSignup && <label>{t("confirmPassword")}<input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required /></label>}
      {error && <p className="form-message form-error" role="alert">{error}</p>}
      {notice && <p className="form-message form-success" role="status">{notice}</p>}
      <button className="button button-primary auth-submit" type="submit" disabled={busy}>{busy ? t("loading") : isSignup ? t("signupAction") : t("loginAction")}</button>
    </form>
    <p className="auth-switch">{isSignup ? t("hasAccount") : t("noAccount")} <Link to={isSignup ? "/login" : "/signup"}>{isSignup ? t("loginLink") : t("createAccount")}</Link></p>
  </section></main>;
}
