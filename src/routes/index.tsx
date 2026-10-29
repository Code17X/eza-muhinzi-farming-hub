import { Fragment } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Eza Muhinzi - Ubuhinzi bw'Ikoranabuhanga" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const [activeSlide0, setActiveSlide0] = useState(0);
  const carouselContent0 = (<>
{activeSlide0 === 0 && <Fragment key={0}>
<div style={{ pointerEvents: "none" }} role="region" aria-label="Notifications (F8)" tabIndex={-1}>
  <ol className={"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 \x73m:\x62ottom-0 \x73m:\x72ight-0 \x73m:\x74op-auto \x73m:\x66lex-col \x6dd:\x6dax-w-[\x3420px]"} tabIndex={-1} />
</div>
<section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
<div className="flex flex-col min-h-screen">
  <div className="flex-1">
    <div className={"min-h-screen \x62g-background"}>
      <div className="absolute top-4 right-4 z-20">
        <button className={"flex h-10 items-center justify-between rounded-md \x62order \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 w-[140px] \x62g-card/\x390 \x62ackdrop-blur-sm \x62order-border text-foreground"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 2) % 2); }} type="button" role="combobox" aria-controls="radix-:r0:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span style={{ pointerEvents: "none" }}>Kinyarwanda</span>
          <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
      <section className={"relative h-[600px] flex items-center justify-center overflow-hidden \x61nimate-fade-in"}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(\"/site-assets/3b35db99785a3566.jpg\")" }}>
          <div className={"absolute inset-0 \x62g-black/\x350"} />
        </div>
        <div className={"relative z-10 text-center \x70x-4 max-w-4xl \x6dx-auto \x61nimate-fade-in"}>
          <h1 className={"\x74ext-4xl \x6dd:\x74ext-6xl \x66ont-bold text-white mb-6"}>Ubuhinzi Bwihuse Kuri Bose</h1>
          <p className={"\x74ext-xl \x6dd:\x74ext-2xl \x74ext-white/\x390 mb-8"}>Ibikoresho bya AI bigufasha gufata ibyemezo byiza, kurinda ibihingwa, no kwita ku matungo</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/auth?mode=signup">
              <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x74ext-lg \x70x-8 hover-scale"}>Tangira Kubuntu</button>
            </a>
            <a href="/auth?mode=login">
              <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x68over:\x74ext-accent-foreground h-11 rounded-md \x74ext-lg \x70x-8 \x62g-white/\x310 text-white \x62order-white \x68over:\x62g-white/\x320 hover-scale"}>Injira</button>
            </a>
          </div>
        </div>
      </section>
      <section className={"\x70y-20 \x70x-4 \x61nimate-fade-in"}>
        <div className={"\x63ontainer \x6dx-auto max-w-6xl"}>
          <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold text-center mb-12"}>Ibyo Ukeneye Byose muri Porogaramu Imwe</h2>
          <div className={"grid \x6dd:\x67rid-cols-2 gap-8"}>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Gusuzuma Indwara z'Ibihingwa</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Ohereza amafoto y'ibihingwa byawe ukabona amakuru yo gukira byihuse ukoresheje AI</p>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 2v2" />
                    <path d="M5 2v2" />
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                    <path d="M8 15a6 6 0 0 0 12 0v-3" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Umujyanama w'AI ku Matungo</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Inama ku buzima bw'amatungo igihe cyose na hose ukoresheje AI</p>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="M20 12h2" />
                    <path d="m19.07 4.93-1.41 1.41" />
                    <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
                    <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Ikirere n'Ibiciro</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Amakuru y'ikirere n'ibiciro bya soko yifashisha gufata ibyemezo byiza mu buhinzi</p>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Amakuru y'Ubuhinzi</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Kora kuri gahunda y'amakuru agezweho mu buhinzi, uburyo bushya, n'ubumenyi bwiza</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"\x70y-20 \x70x-4 \x62g-muted/\x330 \x61nimate-fade-in"}>
        <div className={"\x63ontainer \x6dx-auto max-w-6xl"}>
          <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold text-center mb-12"}>Icyaduhindura ku Bandi</h2>
          <div className={"grid \x6dd:\x67rid-cols-2 gap-6 max-w-4xl \x6dx-auto"}>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Gusuzuma indwara z'ibihingwa ukoresheje AI</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Inama ku matungo byihuse ukoresheje AI</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Bika kandi ukurikirane ibizwe n'inama zawe</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Inama zihariye zishingiye ku mirima yawe</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Bikoreshwa n'abahinzi bafite uburambe n'abatangiye</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Bibonetse igihe cyose ku bikoresho byose</p>
            </div>
          </div>
        </div>
      </section>
      <section className={"\x70y-20 \x70x-4 \x61nimate-fade-in"}>
        <div className={"\x63ontainer \x6dx-auto max-w-4xl text-center"}>
          <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold mb-6"}>Injira mu Muryango w'Abahinzi Benshi Bakoresha Iyi Porogaramu</h2>
          <p className={"\x74ext-xl text-muted-foreground mb-8"}>Niba utangiye cyangwa ufite uburambe, ibikoresho bya AI bizagufasha gutsinda</p>
          <a href="/auth?mode=signup">
            <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x74ext-lg \x70x-8 hover-scale"}>Fungura Konti Yawe Kubuntu</button>
          </a>
        </div>
      </section>
    </div>
  </div>
  <footer className={"\x62g-background \x62order-t \x62order-border \x70y-6 mt-auto"}>
    <div className={"\x63ontainer \x6dx-auto \x70x-4"}>
      <div className="flex flex-col items-center gap-4 text-center text-muted-foreground">
        <div className="flex gap-6">
          <a className={"\x74ext-sm \x68over:\x74ext-primary transition-colors"} href="/about">Kuri Twe</a>
        </div>
        <p className={"\x74ext-sm"}>© 2026 Eza Muhinzi. Uburenganzira bwose burabitswe.</p>
      </div>
    </div>
  </footer>
</div>
</Fragment>}
{activeSlide0 === 1 && <Fragment key={1}>
<div style={{ pointerEvents: "none" }} role="region" aria-label="Notifications (F8)" tabIndex={-1} aria-hidden="true">
  <ol className={"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 \x73m:\x62ottom-0 \x73m:\x72ight-0 \x73m:\x74op-auto \x73m:\x66lex-col \x6dd:\x6dax-w-[\x3420px]"} tabIndex={-1} />
</div>
<section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
<div className="flex flex-col min-h-screen" aria-hidden="true">
  <div className="flex-1">
    <div className={"min-h-screen \x62g-background"}>
      <div className="absolute top-4 right-4 z-20">
        <button className={"flex h-10 items-center justify-between rounded-md \x62order \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 w-[140px] \x62g-card/\x390 \x62ackdrop-blur-sm \x62order-border text-foreground"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 2) % 2); }} type="button" role="combobox" aria-controls="radix-:r0:" aria-expanded="true" aria-autocomplete="none" dir="ltr" data-state="open">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span style={{ pointerEvents: "none" }}>Kinyarwanda</span>
          <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
      <section className={"relative h-[600px] flex items-center justify-center overflow-hidden \x61nimate-fade-in"}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(\"/site-assets/3b35db99785a3566.jpg\")" }}>
          <div className={"absolute inset-0 \x62g-black/\x350"} />
        </div>
        <div className={"relative z-10 text-center \x70x-4 max-w-4xl \x6dx-auto \x61nimate-fade-in"}>
          <h1 className={"\x74ext-4xl \x6dd:\x74ext-6xl \x66ont-bold text-white mb-6"}>Ubuhinzi Bwihuse Kuri Bose</h1>
          <p className={"\x74ext-xl \x6dd:\x74ext-2xl \x74ext-white/\x390 mb-8"}>Ibikoresho bya AI bigufasha gufata ibyemezo byiza, kurinda ibihingwa, no kwita ku matungo</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/auth?mode=signup">
              <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x74ext-lg \x70x-8 hover-scale"}>Tangira Kubuntu</button>
            </a>
            <a href="/auth?mode=login">
              <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x68over:\x74ext-accent-foreground h-11 rounded-md \x74ext-lg \x70x-8 \x62g-white/\x310 text-white \x62order-white \x68over:\x62g-white/\x320 hover-scale"}>Injira</button>
            </a>
          </div>
        </div>
      </section>
      <section className={"\x70y-20 \x70x-4 \x61nimate-fade-in"}>
        <div className={"\x63ontainer \x6dx-auto max-w-6xl"}>
          <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold text-center mb-12"}>Ibyo Ukeneye Byose muri Porogaramu Imwe</h2>
          <div className={"grid \x6dd:\x67rid-cols-2 gap-8"}>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Gusuzuma Indwara z'Ibihingwa</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Ohereza amafoto y'ibihingwa byawe ukabona amakuru yo gukira byihuse ukoresheje AI</p>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 2v2" />
                    <path d="M5 2v2" />
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                    <path d="M8 15a6 6 0 0 0 12 0v-3" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Umujyanama w'AI ku Matungo</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Inama ku buzima bw'amatungo igihe cyose na hose ukoresheje AI</p>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="M20 12h2" />
                    <path d="m19.07 4.93-1.41 1.41" />
                    <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
                    <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Ikirere n'Ibiciro</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Amakuru y'ikirere n'ibiciro bya soko yifashisha gufata ibyemezo byiza mu buhinzi</p>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm \x68over:\x73hadow-lg transition-shadow hover-scale \x61nimate-fade-in"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                </div>
                <h3 className={"\x66ont-semibold \x74racking-tight \x74ext-2xl"}>Amakuru y'Ubuhinzi</h3>
                <p className={"text-muted-foreground \x74ext-base mt-2"}>Kora kuri gahunda y'amakuru agezweho mu buhinzi, uburyo bushya, n'ubumenyi bwiza</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"\x70y-20 \x70x-4 \x62g-muted/\x330 \x61nimate-fade-in"}>
        <div className={"\x63ontainer \x6dx-auto max-w-6xl"}>
          <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold text-center mb-12"}>Icyaduhindura ku Bandi</h2>
          <div className={"grid \x6dd:\x67rid-cols-2 gap-6 max-w-4xl \x6dx-auto"}>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Gusuzuma indwara z'ibihingwa ukoresheje AI</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Inama ku matungo byihuse ukoresheje AI</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Bika kandi ukurikirane ibizwe n'inama zawe</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Inama zihariye zishingiye ku mirima yawe</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Bikoreshwa n'abahinzi bafite uburambe n'abatangiye</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className={"\x74ext-lg"}>Bibonetse igihe cyose ku bikoresho byose</p>
            </div>
          </div>
        </div>
      </section>
      <section className={"\x70y-20 \x70x-4 \x61nimate-fade-in"}>
        <div className={"\x63ontainer \x6dx-auto max-w-4xl text-center"}>
          <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold mb-6"}>Injira mu Muryango w'Abahinzi Benshi Bakoresha Iyi Porogaramu</h2>
          <p className={"\x74ext-xl text-muted-foreground mb-8"}>Niba utangiye cyangwa ufite uburambe, ibikoresho bya AI bizagufasha gutsinda</p>
          <a href="/auth?mode=signup">
            <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x74ext-lg \x70x-8 hover-scale"}>Fungura Konti Yawe Kubuntu</button>
          </a>
        </div>
      </section>
    </div>
  </div>
  <footer className={"\x62g-background \x62order-t \x62order-border \x70y-6 mt-auto"}>
    <div className={"\x63ontainer \x6dx-auto \x70x-4"}>
      <div className="flex flex-col items-center gap-4 text-center text-muted-foreground">
        <div className="flex gap-6">
          <a className={"\x74ext-sm \x68over:\x74ext-primary transition-colors"} href="/about">Kuri Twe</a>
        </div>
        <p className={"\x74ext-sm"}>© 2026 Eza Muhinzi. Uburenganzira bwose burabitswe.</p>
      </div>
    </div>
  </footer>
</div>
</Fragment>}
</>);
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root" data-site-import-carousel-root="0">{carouselContent0}</div>
      <ImportedAsideEditWithLovable />

    </>
  );
}

function ImportedAsideEditWithLovable() {
  return (
    <aside className="normal-case! [will-change:transform,opacity]" id="lovable-badge" role="complementary" dir="ltr" lang="en" aria-label="Edit with Lovable"><a className={"[&]:whitespace-nowrap"} aria-label="Edit with Lovable" href="https://lovable.dev/projects/lovp_1zyd4sd1qa8ktv02b4wn8r65km?utm_source=lovable-badge" id="lovable-badge-cta" rel="noopener nofollow" target="_blank">{"\n\t\t"}<span id="lovable-badge-text">Edit with</span>{"\n\t\t"}<span id="lovable-badge-logo"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" fill="none" viewBox="0 0 52 16">{"\n  "}<path fill="#FCFBF8" fillRule="evenodd" d="M20.318 5.25c.643 0 1.206.14 1.69.418a2.81 2.81 0 0 1 1.118 1.191c.266.513.4 1.115.4 1.807s-.134 1.296-.4 1.812a2.81 2.81 0 0 1-1.118 1.193c-.484.278-1.047.418-1.69.418s-1.208-.14-1.695-.418a2.85 2.85 0 0 1-1.125-1.193c-.262-.516-.393-1.12-.393-1.812s.131-1.294.393-1.807a2.848 2.848 0 0 1 1.125-1.191c.487-.279 1.052-.418 1.695-.418Zm0 1.425c-.27 0-.504.076-.7.228-.193.147-.34.37-.443.67-.102.295-.153.66-.153 1.093 0 .435.05.801.153 1.1.102.3.25.524.443.676.196.147.43.22.7.22.27 0 .502-.073.694-.22.193-.152.341-.375.443-.67.103-.299.153-.667.153-1.106 0-.65-.112-1.145-.337-1.481a1.08 1.08 0 0 0-.953-.51ZM32.7 5.25c.61 0 1.127.1 1.549.3.422.197.74.48.953.849.217.368.325.809.325 1.32v2.704c0 .29.02.562.062.812.044.245.108.4.19.466V12h-1.935a5.895 5.895 0 0 1-.105-.684 7.745 7.745 0 0 1-.02-.228 2.293 2.293 0 0 1-.151.203c-.205.242-.47.437-.793.584-.32.143-.685.215-1.094.215-.406 0-.77-.08-1.094-.24a1.845 1.845 0 0 1-.756-.682 1.984 1.984 0 0 1-.27-1.045c0-.606.178-1.069.535-1.388.356-.324.87-.534 1.542-.633l1.125-.16c.225-.032.403-.074.534-.123a.622.622 0 0 0 .288-.196.549.549 0 0 0 .093-.327.65.65 0 0 0-.11-.367.702.702 0 0 0-.32-.27c-.14-.07-.31-.105-.51-.105-.32 0-.576.083-.768.251-.193.164-.298.39-.314.676h-1.923c.016-.434.147-.82.393-1.155.25-.34.596-.604 1.039-.792.442-.189.954-.283 1.535-.283Zm.99 3.498a.98.98 0 0 1-.215.14 2.49 2.49 0 0 1-.584.178l-.473.092c-.315.061-.553.156-.713.283-.155.127-.233.305-.233.534 0 .23.084.412.252.547.168.135.383.203.645.203s.494-.058.694-.173c.201-.118.355-.282.461-.49.11-.21.166-.448.166-.714v-.6Zm4.526-2.375c.065-.125.138-.243.221-.349.197-.25.437-.44.719-.571.282-.135.6-.203.952-.203.528 0 .988.138 1.377.412.389.275.688.67.896 1.186.21.512.314 1.12.314 1.824 0 .7-.107 1.309-.32 1.825-.213.512-.518.906-.915 1.18-.393.275-.854.412-1.383.412-.352 0-.667-.062-.946-.184a1.832 1.832 0 0 1-.7-.554 2.2 2.2 0 0 1-.234-.383V12h-1.843V3h1.862v3.373Zm1.284.296c-.274 0-.51.085-.707.253-.192.163-.338.397-.436.7a3.376 3.376 0 0 0-.148 1.05c0 .406.05.759.148 1.058.098.299.243.53.436.694.197.164.433.246.707.246.279 0 .512-.082.7-.246.193-.164.336-.395.43-.694.099-.3.148-.652.148-1.058 0-.405-.05-.757-.147-1.056-.095-.299-.238-.53-.43-.694a1.015 1.015 0 0 0-.7-.253Zm9.416-1.419c.602 0 1.136.131 1.604.393.466.262.829.643 1.086 1.143.263.5.394 1.097.394 1.794 0 .25-.002.449-.006.596H47.51c.018.288.071.538.164.75a1.3 1.3 0 0 0 .491.596c.214.13.465.196.757.196.319 0 .583-.082.792-.246.209-.167.34-.403.393-.706h1.862a2.48 2.48 0 0 1-.485 1.235 2.54 2.54 0 0 1-1.051.805c-.439.188-.949.283-1.53.283-.655 0-1.225-.125-1.708-.375a2.672 2.672 0 0 1-1.13-1.143c-.267-.508-.4-1.137-.4-1.887 0-.712.14-1.327.418-1.843a2.86 2.86 0 0 1 1.155-1.186c.491-.27 1.051-.405 1.678-.405Zm-.044 1.345c-.274 0-.516.068-.725.203a1.29 1.29 0 0 0-.479.59 2.045 2.045 0 0 0-.132.498h2.562a1.873 1.873 0 0 0-.138-.602 1.061 1.061 0 0 0-.418-.516 1.243 1.243 0 0 0-.67-.173Z" clipRule="evenodd" />{"\n  "}<path fill="#FCFBF8" d="m26.605 9.995 1.342-4.566h1.924L27.628 12h-2.07l-2.33-6.57h1.98l1.397 4.565Zm-13.013.143h2.256c1.632 0 1.421 1.837 1.418 1.861h-5.603V3h1.93v7.138Zm31.516 1.861h-1.862V3h1.862v8.999Z" />{"\n  "}<path fill="url(#a)" fillRule="evenodd" d="M2.7 3c1.492 0 2.7 1.192 2.7 2.663v1.012h.9c1.49 0 2.7 1.192 2.7 2.662S7.791 12 6.3 12H0V5.663C0 4.193 1.209 3 2.7 3Z" clipRule="evenodd" />{"\n  "}<defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(-1.54236 7.07838 -10.231 -2.15602 4.627 5.022)" gradientUnits="userSpaceOnUse"><stop offset=".106" stopColor="#FE7B02" /><stop offset=".394" stopColor="#FE3F21" /><stop offset=".608" stopColor="#F858BC" /><stop offset=".929" stopColor="#575ECF" /></radialGradient></defs>{"\n"}</svg>{"\n\n"}</span>{"\n\t"}</a><span id="lovable-badge-divider" aria-hidden="true" /><button className="min-h-[24px] min-w-[24px]" id="lovable-badge-close" aria-label="Dismiss" title="Dismiss" type="button">{"\n\t\t"}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">{"\n\t\t\t"}<path d="M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" />{"\n\t\t"}</svg>{"\n\t"}</button></aside>
  );
}
