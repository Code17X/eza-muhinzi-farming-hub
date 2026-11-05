import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Banknote, CloudSun, Leaf } from "lucide-react";
import { useI18n } from "@/i18n/i18n";

export const Route = createFileRoute("/app/")({ component: AppHome });
function AppHome() {
  const { t } = useI18n();
  return <section className="dashboard-home">
    <div className="dashboard-intro"><p className="eyebrow">{t("dashboard")}</p><h1>{t("dashboardWelcome")}</h1><p>{t("dashboardIntro")}</p></div>
    <div className="dashboard-actions">
      <Link className="dashboard-action-card" to="/app/diagnose"><span className="dashboard-action-icon"><Leaf size={21}/></span><span className="dashboard-action-copy"><strong>{t("diagnose")}</strong><small>{t("dashboardDiagnoseBody")}</small></span><ArrowUpRight size={18}/></Link>
      <Link className="dashboard-action-card" to="/app/weather"><span className="dashboard-action-icon"><CloudSun size={21}/></span><span className="dashboard-action-copy"><strong>{t("weather")}</strong><small>{t("dashboardWeatherBody")}</small></span><ArrowUpRight size={18}/></Link>
      <Link className="dashboard-action-card" to="/app/prices"><span className="dashboard-action-icon"><Banknote size={21}/></span><span className="dashboard-action-copy"><strong>{t("marketPrices")}</strong><small>{t("marketPricesBody")}</small></span><ArrowUpRight size={18}/></Link>
    </div>
  </section>;
}
