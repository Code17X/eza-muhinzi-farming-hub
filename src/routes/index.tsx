import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChartNoAxesCombined, Sprout } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useI18n } from "@/i18n/i18n";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Eza Muhinzi | Ubuhinzi bw'Ikoranabuhanga" }] }),
  component: Index,
});
function Index() {
  const { t } = useI18n();
  const features = [
    { icon: BookOpen, title: t("feature1Title"), body: t("feature1Body") },
    { icon: ChartNoAxesCombined, title: t("feature2Title"), body: t("feature2Body") },
    { icon: Sprout, title: t("feature3Title"), body: t("feature3Body") },
  ];
  return <div className="landing">
    <header className="site-header"><Link className="brand-mark" to="/"><span className="brand-symbol"><Sprout size={19}/></span><span>{t("brand")}</span></Link><nav className="site-nav"><a href="#features">{t("featuresEyebrow")}</a><Link className="nav-login" to="/login">{t("navLogin")}</Link><Link className="button button-primary nav-cta" to="/signup">{t("navSignup")}<ArrowRight size={16}/></Link></nav><LanguageSwitcher /></header>
    <main><section className="hero"><div className="hero-backdrop"/><div className="hero-content"><div className="hero-copy"><span className="hero-pill"><span className="status-dot"/>{t("trust")}</span><p className="eyebrow">{t("heroEyebrow")}</p><h1>{t("heroTitle")}</h1><p className="hero-description">{t("heroBody")}</p><div className="hero-actions"><Link className="button button-primary button-large" to="/signup">{t("getStarted")}<ArrowRight size={18}/></Link><Link className="button button-outline button-large" to="/login">{t("signIn")}</Link></div></div><div className="hero-visual" aria-hidden="true"><div className="sun-glow"/><div className="field field-one"/><div className="field field-two"/><div className="field field-three"/><div className="field-label"><Sprout size={18}/><span>{t("brand")}</span></div></div></div><div className="hero-bottom"><span>01 / 03</span><span className="hero-line"/><span>RWANDA · 2026</span></div></section>
    <section className="features-section" id="features"><div className="section-heading"><p className="eyebrow">{t("featuresEyebrow")}</p><h2>{t("featuresTitle")}</h2></div><div className="feature-grid">{features.map(({icon: Icon,title,body},i)=><article className="feature-card" key={title}><div className="feature-top"><span className="feature-icon"><Icon size={21}/></span><span className="feature-index">0{i+1}</span></div><h3>{title}</h3><p>{body}</p></article>)}</div></section></main>
    <footer className="site-footer"><Link className="brand-mark" to="/"><span className="brand-symbol"><Sprout size={17}/></span><span>{t("brand")}</span></Link><span>{t("footer")}</span><a href="#top" onClick={event=>{event.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}}>↑</a></footer>
  </div>;
}
