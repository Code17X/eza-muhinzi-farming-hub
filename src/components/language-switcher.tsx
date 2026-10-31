import { Globe2 } from "lucide-react";
import { useI18n } from "@/i18n/i18n";
export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  return <label className="language-picker"><Globe2 size={16} aria-hidden="true"/><span className="sr-only">{t("language")}</span><select aria-label={t("language")} value={language} onChange={event => setLanguage(event.target.value as "rw" | "en")}><option value="rw">Kinyarwanda</option><option value="en">English</option></select></label>;
}
