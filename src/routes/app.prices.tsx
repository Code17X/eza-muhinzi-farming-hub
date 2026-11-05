import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Banknote, MapPin, RefreshCw, Search } from "lucide-react";
import { loadMarketPrices, type MarketPrice } from "@/features/prices/market-prices";
import { useI18n } from "@/i18n/i18n";

export const Route = createFileRoute("/app/prices")({ component: PricesPage });

function PricesPage() {
  const { t, language } = useI18n();
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);
    loadMarketPrices()
      .then(data => { if (active) setPrices(data); })
      .catch(() => { if (active) setError(true); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [refresh]);

  const filteredPrices = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    if (!needle) return prices;
    return prices.filter(item => [item.name[language], ...item.aliases[language], item.name.en, item.name.rw]
      .some(name => name.toLocaleLowerCase().includes(needle)));
  }, [prices, query, language]);
  const locale = language === "rw" ? "rw-RW" : "en-RW";
  const formatDate = (date: string) => new Intl.DateTimeFormat(locale, { month: "long", year: "numeric", timeZone: "Africa/Kigali" }).format(new Date(`${date}T12:00:00`));

  return <section className="prices-page">
    <header className="prices-heading"><div><span className="diagnose-kicker"><Banknote size={15}/>{t("marketPrices")}</span><h1>{t("pricesTitle")}</h1><p>{t("pricesIntro")}</p></div></header>
    <label className="prices-search"><Search size={17}/><input aria-label={t("pricesSearch")} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={t("pricesSearch")} /></label>
    {loading ? <div className="prices-state" role="status"><RefreshCw className="spin" size={21}/><span>{t("pricesLoading")}</span></div>
      : error ? <div className="prices-state prices-error" role="alert"><AlertCircle size={22}/><div><p>{t("pricesError")}</p><button className="button button-outline" type="button" onClick={() => setRefresh(value => value + 1)}><RefreshCw size={15}/>{t("retry")}</button></div></div>
      : filteredPrices.length === 0 ? <div className="prices-state prices-empty"><Search size={22}/><p>{query.trim() ? t("pricesNoResults") : t("pricesEmpty")}</p></div>
      : <div className="prices-grid">{filteredPrices.map(item => <PriceCard key={item.id} item={item} language={language} locale={locale} updatedLabel={t("pricesUpdated")} />)}</div>}
    <p className="prices-note">{t("pricesDataNote")}</p>
  </section>;
}

function PriceCard({ item, language, locale, updatedLabel }: { item: MarketPrice; language: "rw" | "en"; locale: string; updatedLabel: string }) {
  const date = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric", timeZone: "Africa/Kigali" }).format(new Date(`${item.updatedAt}T12:00:00`));
  return <article className="price-card"><div className="price-card-top"><span className="price-crop-icon"><Banknote size={19}/></span><span className="price-unit">RWF/{item.unit[language]}</span></div><h2>{item.name[language]}</h2><strong className="price-value">{new Intl.NumberFormat(locale).format(item.priceRwf)} <small>RWF</small></strong><p className="price-market"><MapPin size={14}/>{item.market[language]}</p><div className="price-card-footer"><span>{updatedLabel}</span><time dateTime={item.updatedAt}>{date}</time></div><small className="price-source">{item.source}</small></article>;
}
