import { useState, type FormEvent, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, LoaderCircle, Sparkles, Stethoscope } from "lucide-react";
import { useAuth } from "@/features/auth/auth-context";
import { useI18n } from "@/i18n/i18n";

type Pair = { rw: string; en: string };
type Advice = { likely_issue: Pair; recommended_actions: Pair[]; veterinarian: Pair };
const MAX_BYTES = 5 * 1024 * 1024;
const TYPES = ["image/jpeg", "image/png", "image/webp"];

export const Route = createFileRoute("/app/livestock")({ component: LivestockPage });
function LivestockPage() {
  const { t, language } = useI18n(); const { session } = useAuth();
  const [problem, setProblem] = useState(""); const [file, setFile] = useState<File | null>(null); const [busy, setBusy] = useState(false); const [error, setError] = useState(""); const [advice, setAdvice] = useState<Advice | null>(null);
  const onFile = (e: ChangeEvent<HTMLInputElement>) => { const next = e.target.files?.[0] ?? null; e.target.value = ""; setError(""); if (!next) return; if (!TYPES.includes(next.type) || next.size > MAX_BYTES) { setFile(null); setError(t("livestockInvalidImage")); return; } setFile(next); };
  const submit = async (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setError(""); setAdvice(null); if (problem.trim().length < 5) { setError(t("livestockProblemRequired")); return; } if (!session?.access_token) { setError(t("livestockError")); return; } setBusy(true); const body = new FormData(); body.set("problem", problem); body.set("language", language); if (file) body.set("image", file); try { const r = await fetch("/api/livestock", { method: "POST", headers: { Authorization: "Bearer " + session.access_token }, body }); const data = await r.json() as { advice?: Advice; error?: string }; if (!r.ok) throw new Error(r.status === 429 ? t("livestockRateLimited") : data.error === "ai_not_configured" ? t("configAiMissing") : data.error === "invalid_image" ? t("livestockInvalidImage") : data.error === "problem_required" ? t("livestockProblemRequired") : t("livestockError")); if (!data.advice) throw new Error(t("livestockError")); setAdvice(data.advice); } catch (err) { setError(err instanceof Error ? err.message : t("livestockError")); } finally { setBusy(false); } };
  const text = (pair: Pair) => pair[language];
  return <div className="diagnose-page">
    <div className="diagnose-heading"><div><span className="diagnose-kicker"><Sparkles size={14}/>{t("livestockTitle")}</span><h1>{t("livestockTitle")}</h1><p>{t("livestockIntro")}</p></div><span className="diagnose-leaf"><HeartPulse size={23}/></span></div>
    <div className="diagnose-grid">
      <section className="diagnose-card upload-card"><form onSubmit={submit}><div className="diagnose-card-title"><span className="step-number">1</span><div><h2>{t("livestockDescribe")}</h2><p>{t("livestockDescribeHint")}</p></div></div>
        <label className="field-label" htmlFor="livestock-problem">{t("livestockProblem")}</label><textarea id="livestock-problem" className="form-input" rows={6} maxLength={3000} value={problem} onChange={e => setProblem(e.target.value)} placeholder={t("livestockPlaceholder")} />
        <label className="field-label" htmlFor="livestock-image">{t("livestockPhotoOptional")}</label><input id="livestock-image" className="form-input" type="file" accept="image/jpeg,image/png,image/webp" onChange={onFile}/><small>{file ? file.name : t("livestockPhotoHint")}</small>
        {error && <div className="diagnosis-error" role="alert">{error}</div>}
        <button className="button button-primary diagnose-submit" disabled={busy}>{busy ? <><LoaderCircle size={17} className="spin"/>{t("livestockLoading")}</> : <><Sparkles size={17}/>{t("livestockAsk")}</>}</button>
      </form></section>
      <section className="diagnose-card result-card" aria-live="polite"><div className="diagnose-card-title"><span className="step-number"><Stethoscope size={17}/></span><div><h2>{t("livestockResult")}</h2><p>{advice ? t("livestockResultHint") : t("livestockEmpty")}</p></div></div>
        {advice && <div className="diagnosis-result"><article><h3>{t("livestockLikelyIssue")}</h3><p>{text(advice.likely_issue)}</p></article><article><h3>{t("livestockActions")}</h3><ul>{advice.recommended_actions.map((action, i) => <li key={i}>{text(action)}</li>)}</ul></article><article><h3>{t("livestockVet")}</h3><p>{text(advice.veterinarian)}</p></article><p className="result-caution">{t("livestockCaution")}</p></div>}
      </section>
    </div>
  </div>;
}
