import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/i18n";
export const Route = createFileRoute("/app/")({ component: AppHome });
function AppHome() { const { t } = useI18n(); return <section className="app-empty-state"><span className="status-dot"/><p>{t("appTitle")}</p><small>{t("appBody")}</small></section>; }
