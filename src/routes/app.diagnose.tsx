import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Camera, Check, Clock3, ImagePlus, Leaf, LoaderCircle, ShieldCheck, Sparkles, Upload, X } from "lucide-react";
import { useAuth } from "@/features/auth/auth-context";
import { useI18n } from "@/i18n/i18n";

type LangText = { rw: string; en: string };
type Diagnosis = { is_crop_image: boolean; crop_name: LangText; disease_name: LangText; confidence: number; treatment_advice: LangText; prevention_tips: LangText[] };
type HistoryItem = { id: string; crop_name: string; result: Diagnosis; created_at: string };
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const Route = createFileRoute("/app/diagnose")({ component: DiagnosePage });
function DiagnosePage() {
  const { t, language } = useI18n();
  const { session } = useAuth();
  const fileInput = useRef<HTMLInputElement>(null);
  const cameraInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [crop, setCrop] = useState("maize");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const locale = language === "rw" ? "rw-RW" : "en-RW";

  useEffect(() => {
    if (!file) { setPreview(""); return; }
    const url = URL.createObjectURL(file); setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);
  useEffect(() => {
    if (!session?.access_token) return;
    let active = true;
    fetch("/api/diagnose", { headers: { Authorization: "Bearer " + session.access_token } })
      .then(async response => response.ok ? response.json() as Promise<{ history: HistoryItem[] }> : null)
      .then(data => { if (active && data) setHistory(data.history); })
      .catch(() => {})
      .finally(() => { if (active) setHistoryLoading(false); });
    return () => { active = false; };
  }, [session?.access_token]);

  const pickFile = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.files?.[0] ?? null;
    event.target.value = "";
    setError(""); setDiagnosis(null);
    if (!next) return;
    if (!ACCEPTED_TYPES.includes(next.type) || next.size > MAX_IMAGE_BYTES) { setFile(null); setError(t("invalidImage")); return; }
    setFile(next);
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError(""); setDiagnosis(null);
    if (!file) { setError(t("imageRequired")); return; }
    if (!session?.access_token) { setError(t("diagnosisFailed")); return; }
    setBusy(true);
    const body = new FormData(); body.set("image", file); body.set("crop", crop); body.set("language", language);
    try {
      const response = await fetch("/api/diagnose", { method: "POST", headers: { Authorization: "Bearer " + session.access_token }, body });
      const payload = await response.json() as { diagnosis?: Diagnosis; history?: HistoryItem[]; error?: string };
      if (!response.ok) {
        const message = response.status === 429 ? t("rateLimited") : payload.error === "not_crop" ? t("notCrop") : payload.error === "history_setup_required" ? t("databaseSetup") : payload.error === "ai_not_configured" ? t("configAiMissing") : t("diagnosisFailed");
        throw new Error(message);
      }
      if (!payload.diagnosis) throw new Error(t("diagnosisFailed"));
      setDiagnosis(payload.diagnosis);
      const historyResponse = await fetch("/api/diagnose", { headers: { Authorization: "Bearer " + session.access_token } });
      if (historyResponse.ok) { const data = await historyResponse.json() as { history: HistoryItem[] }; setHistory(data.history); }
    } catch (caught) { setError(caught instanceof Error ? caught.message : t("diagnosisFailed")); } finally { setBusy(false); }
  };
  const formatDate = (date: string) => new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(date));
  return <div className="diagnose-page">
    <div className="diagnose-heading"><div><span className="diagnose-kicker"><Sparkles size={14}/>{t("diagnose")}</span><h1>{t("diagnoseTitle")}</h1><p>{t("diagnoseIntro")}</p></div><span className="diagnose-leaf"><Leaf size={23}/></span></div>
    <div className="diagnose-grid">
      <section className="diagnose-card upload-card">
        <div className="diagnose-card-title"><span className="step-number">1</span><div><h2>{t("choosePhoto")}</h2><p>{t("photoHint")}</p></div></div>
        <form onSubmit={submit}>
          <input ref={fileInput} className="visually-hidden-input" type="file" accept="image/jpeg,image/png,image/webp" onChange={pickFile} />
          <input ref={cameraInput} className="visually-hidden-input" type="file" accept="image/jpeg,image/png,image/webp" capture="environment" onChange={pickFile} />
          {preview ? <div className="photo-preview"><img src={preview} alt={t("choosePhoto")} /><button className="remove-photo" type="button" aria-label={t("removePhoto")} onClick={() => setFile(null)}><X size={16}/></button><div className="photo-ready"><Check size={14}/>{file?.name}</div></div> : <div className="upload-dropzone"><span className="upload-icon"><ImagePlus size={25}/></span><strong>{t("choosePhoto")}</strong><small>{t("photoHint")}</small><div className="upload-actions"><button type="button" className="button button-outline" onClick={() => fileInput.current?.click()}><Upload size={16}/>{t("choosePhoto")}</button><button type="button" className="button button-outline" onClick={() => cameraInput.current?.click()}><Camera size={16}/>{t("takePhoto")}</button></div></div>}
          <label className="crop-select-label">{t("crop")}<select value={crop} onChange={event => setCrop(event.target.value)}><option value="maize">{t("cropCorn")}</option><option value="beans">{t("cropBeans")}</option><option value="cassava">{t("cropCassava")}</option><option value="potato">{t("cropPotato")}</option><option value="other">{t("cropOther")}</option></select></label>
          {error && <div className="diagnose-error" role="alert">{error}</div>}
          <button className="button button-primary diagnose-submit" type="submit" disabled={busy}>{busy ? <><LoaderCircle className="spin" size={17}/>{t("analyzing")}</> : <><Sparkles size={17}/>{t("analyze")}</>}</button>
        </form>
      </section>
      <section className="diagnose-card result-card" aria-live="polite">
        {diagnosis ? <DiagnosisResult result={diagnosis} language={language} t={t}/> : <div className="result-placeholder"><span className="result-placeholder-icon"><Leaf size={25}/></span><h2>{t("diagnosisResult")}</h2><p>{t("resultPlaceholder")}</p><div className="placeholder-lines"><i/><i/><i/></div></div>}
      </section>
    </div>
    <section className="history-section"><div className="history-heading"><div><span className="diagnose-kicker"><Clock3 size={14}/>{t("history")}</span><h2>{t("history")}</h2></div><span className="history-count">{history.length}</span></div>
      {historyLoading ? <p className="history-empty">{t("loading")}</p> : history.length === 0 ? <p className="history-empty">{t("noHistory")}</p> : <div className="history-list">{history.map(item => <article className="history-item" key={item.id}><span className="history-item-icon"><Leaf size={17}/></span><div className="history-item-main"><strong>{item.result?.disease_name?.[language] ?? item.crop_name}</strong><span>{item.result?.crop_name?.[language] ?? item.crop_name}</span></div><span className="history-confidence">{item.result?.confidence ?? 0}%</span><time dateTime={item.created_at}>{formatDate(item.created_at)}</time></article>)}</div>}
    </section>
  </div>;
}
function DiagnosisResult({ result, language, t }: { result: Diagnosis; language: "rw" | "en"; t: (key: "diagnosisResult" | "confidence" | "confidenceNote" | "treatment" | "prevention" | "resultCaution" | "resultPlaceholder") => string }) {
  return <div className="diagnosis-result"><div className="result-topline"><span><Check size={15}/>{t("diagnosisResult")}</span><span className="result-badge">{result.confidence}%</span></div><p className="result-crop-label">{result.crop_name[language]}</p><h2>{result.disease_name[language]}</h2><div className="confidence-label"><span>{t("confidence")}</span><span>{result.confidence}%</span></div><div className="confidence-track"><i style={{ width: result.confidence + "%" }}/></div><small className="confidence-note">{t("confidenceNote")}</small><div className="result-advice"><div className="advice-heading"><span className="advice-icon"><SproutIcon/></span><h3>{t("treatment")}</h3></div><p>{result.treatment_advice[language]}</p></div><div className="result-advice prevention-advice"><div className="advice-heading"><span className="advice-icon"><ShieldCheck size={18}/></span><h3>{t("prevention")}</h3></div><ul>{result.prevention_tips.map((tip, index) => <li key={index}>{tip[language]}</li>)}</ul></div><p className="result-caution">{t("resultCaution")}</p></div>;
}
function SproutIcon() { return <Leaf size={18}/>; }
