import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, CalendarDays, CheckCircle2, Clock3, Leaf, LoaderCircle, Sprout } from "lucide-react";
import { useAuth } from "@/features/auth/auth-context";
import { useI18n } from "@/i18n/i18n";

type Bilingual = { rw: string; en: string };
type Diagnosis = { is_crop_image: boolean; crop_name: Bilingual; disease_name: Bilingual; confidence: number; treatment_advice: Bilingual; prevention_tips: Bilingual[] };
type HistoryItem = { id: string; crop_name: string; result: Diagnosis; created_at: string };
type HistoryResponse = { history: HistoryItem[]; total: number; error?: string };
const PAGE_SIZE = 25;

export const Route = createFileRoute("/app/history")({ component: DiagnosisHistoryPage });
function DiagnosisHistoryPage() {
  const { session } = useAuth();
  const { t, language } = useI18n();
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [moreError, setMoreError] = useState(false);
  const locale = language === "rw" ? "rw-RW" : "en-RW";

  useEffect(() => {
    const token = session?.access_token;
    if (!token) { setLoading(false); return; }
    let active = true;
    setLoading(true); setLoadError(false);
    fetchHistory(token, 0)
      .then(data => { if (active) { setItems(data.history); setTotal(data.total); setSelectedId(data.history[0]?.id ?? ""); } })
      .catch(() => { if (active) setLoadError(true); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [session?.access_token, refresh]);

  const selected = items.find(item => item.id === selectedId) ?? null;
  const date = (value: string) => new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  const loadMore = async () => {
    const token = session?.access_token;
    if (!token || loadingMore || items.length >= total) return;
    setLoadingMore(true); setMoreError(false);
    try {
      const data = await fetchHistory(token, items.length);
      setItems(current => [...current, ...data.history]); setTotal(data.total);
    } catch { setMoreError(true); } finally { setLoadingMore(false); }
  };

  return <div className="diagnosis-history-page">
    <header className="diagnosis-history-heading">
      <div><span className="diagnose-kicker"><Clock3 size={14}/>{t("historyPageTitle")}</span><h1>{t("historyPageTitle")}</h1><p>{t("historyIntro")}</p></div>
      <Link className="button button-primary history-new-diagnosis" to="/app/diagnose"><Sprout size={16}/>{t("startDiagnosis")}</Link>
    </header>

    {loading ? <div className="history-page-loading" role="status"><LoaderCircle className="spin" size={20}/><span>{t("loading")}</span></div> : loadError ? <div className="history-page-error" role="alert"><AlertCircle size={20}/><div><strong>{t("historyLoadError")}</strong><p>{t("diagnosisFailed")}</p><button className="button button-outline" type="button" onClick={() => setRefresh(value => value + 1)}>{t("retry")}</button></div></div> : items.length === 0 ? <section className="history-empty-state"><span className="history-empty-icon"><Leaf size={27}/></span><p className="eyebrow">{t("historyPageTitle")}</p><h2>{t("historyEmptyTitle")}</h2><p>{t("historyEmptyBody")}</p><Link className="button button-primary" to="/app/diagnose">{t("startDiagnosis")}<ArrowRight size={16}/></Link></section> : <div className="history-page-grid">
      <section className="history-page-list" aria-label={t("historyPageTitle")}>
        <div className="history-page-list-heading"><span>{t("historyPageTitle")}</span><span>{items.length}{total > items.length ? " / " + total : ""}</span></div>
        <div className="history-page-items">{items.map(item => {
          const title = item.result?.disease_name?.[language] ?? item.crop_name;
          const crop = item.result?.crop_name?.[language] ?? item.crop_name;
          const previewText = item.result?.treatment_advice?.[language] ?? "";
          return <button className={"history-page-item" + (item.id === selectedId ? " is-selected" : "")} type="button" key={item.id} aria-pressed={item.id === selectedId} onClick={() => setSelectedId(item.id)}>
            <span className="history-page-item-icon"><Leaf size={17}/></span><span className="history-page-item-copy"><strong>{title}</strong><span className="history-page-item-crop">{crop}</span><span className="history-page-item-preview">{t("diagnosisPreview")}{shorten(previewText, 104)}</span><span className="history-page-item-date"><CalendarDays size={13}/><time dateTime={item.created_at}>{date(item.created_at)}</time></span></span><span className="history-page-item-confidence">{item.result?.confidence ?? 0}%</span>
          </button>;
        })}</div>
        {moreError && <div className="history-more-error" role="alert"><span>{t("historyLoadError")}</span><button type="button" onClick={loadMore}>{t("retry")}</button></div>}
        {items.length < total && <button className="history-load-more" type="button" onClick={loadMore} disabled={loadingMore}>{loadingMore ? <LoaderCircle className="spin" size={16}/> : null}{loadingMore ? t("loading") : t("loadMore")}</button>}
      </section>
      <aside className="history-detail-panel" aria-live="polite">
        {selected ? <HistoryDetails item={selected} language={language} dateLabel={date(selected.created_at)} t={t}/> : <div className="history-detail-placeholder"><span className="history-empty-icon"><CheckCircle2 size={24}/></span><p>{t("selectDiagnosis")}</p></div>}
      </aside>
    </div>}
  </div>;
}

async function fetchHistory(token: string, offset: number): Promise<HistoryResponse> {
  const response = await fetch("/api/diagnose?limit=" + PAGE_SIZE + "&offset=" + offset, { headers: { Authorization: "Bearer " + token } });
  const data = await response.json() as HistoryResponse;
  if (!response.ok) throw new Error(data.error ?? "History request failed");
  return data;
}
function shorten(value: string, max: number) { return value.length > max ? value.slice(0, max).trimEnd() + "…" : value; }
function HistoryDetails({ item, language, dateLabel, t }: { item: HistoryItem; language: "rw" | "en"; dateLabel: string; t: (key: "diagnosisDetail" | "savedAt" | "confidence" | "treatment" | "prevention" | "confidenceNote" | "resultCaution") => string }) {
  const result = item.result;
  return <article className="history-detail-content">
    <div className="history-detail-top"><span className="diagnose-kicker"><CheckCircle2 size={14}/>{t("diagnosisDetail")}</span><span className="history-detail-confidence">{result.confidence}%</span></div>
    <p className="result-crop-label">{result.crop_name[language]}</p><h2>{result.disease_name[language]}</h2>
    <p className="history-detail-date"><CalendarDays size={14}/><span>{t("savedAt")}: {dateLabel}</span></p>
    <div className="confidence-label"><span>{t("confidence")}</span><span>{result.confidence}%</span></div><div className="confidence-track"><i style={{ width: result.confidence + "%" }}/></div><small className="confidence-note">{t("confidenceNote")}</small>
    <section className="result-advice"><div className="advice-heading"><span className="advice-icon"><Sprout size={17}/></span><h3>{t("treatment")}</h3></div><p>{result.treatment_advice[language]}</p></section>
    <section className="result-advice"><div className="advice-heading"><span className="advice-icon"><Leaf size={17}/></span><h3>{t("prevention")}</h3></div><ul>{result.prevention_tips.map((tip, index) => <li key={index}>{tip[language]}</li>)}</ul></section>
    <p className="result-caution">{t("resultCaution")}</p>
  </article>;
}
