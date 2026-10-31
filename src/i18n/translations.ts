export type Language = "rw" | "en";

export const translations = {
  rw: {
    brand: "Eza Muhinzi", navHome: "Ahabanza", navLogin: "Injira", navSignup: "Tangira",
    heroEyebrow: "Ubumenyi n'ibikoresho by'ubuhinzi", heroTitle: "Umusaruro mwiza utangirira ku makuru meza.",
    heroBody: "Eza Muhinzi ihuriza hamwe ubumenyi bufatika n'ibikoresho bifasha abahinzi bo mu Rwanda gufata ibyemezo byiza buri munsi.",
    getStarted: "Tangira ubu", signIn: "Injira kuri konti", trust: "Yubakiwe abahinzi bo mu Rwanda",
    featuresEyebrow: "Ibikoresho bigufasha", featuresTitle: "Ubuhinzi bukorohera, intambwe imwe imwe.",
    feature1Title: "Ubumenyi bwizewe", feature1Body: "Shaka inama zoroshye kandi zifatika zijyanye n'ubuhinzi bwawe.",
    feature2Title: "Fata ibyemezo byiza", feature2Body: "Itegure igihembwe cy'ihinga ukoresheje amakuru afatika.",
    feature3Title: "Bika ibyo wize", feature3Body: "Komeza ubumenyi n'amakuru agufasha gukurikirana umurima wawe.",
    footer: "Hamwe n'abahinzi, buri gihembwe.", language: "Ururimi",
    loginTitle: "Murakaza neza", loginSubtitle: "Injira kuri konti yawe ya Eza Muhinzi.", signupTitle: "Fungura konti", signupSubtitle: "Tangira urugendo rwawe rw'ubuhinzi bufite amakuru.",
    email: "Imeyili", password: "Ijambo ry'ibanga", name: "Amazina", confirmPassword: "Emeza ijambo ry'ibanga",
    loginAction: "Injira", signupAction: "Fungura konti", noAccount: "Nta konti ufite?", hasAccount: "Usanzwe ufite konti?",
    createAccount: "Fungura konti", loginLink: "Injira", loading: "Tegereza...", authError: "Ntibyagenze neza. Ongera ugerageze.",
    checkEmail: "Reba imeyili yawe kugira ngo wemeze konti yawe.", configMissing: "Shyiramo VITE_SUPABASE_URL na VITE_SUPABASE_ANON_KEY muri .env.local kugira ngo ukoreshe konti.",
    appTitle: "Ahabanza", appWelcome: "Murakaza neza kuri Eza Muhinzi.", appBody: "Aha ni ho uzasanga ibikoresho byawe by'ubuhinzi.", signOut: "Sohoka",
    home: "Ahabanza", dashboard: "Incamake", backHome: "Subira ahabanza",
  },
  en: {
    brand: "Eza Muhinzi", navHome: "Home", navLogin: "Log in", navSignup: "Get started",
    heroEyebrow: "Knowledge and tools for farming", heroTitle: "Better harvests begin with better information.",
    heroBody: "Eza Muhinzi brings practical knowledge and useful tools together to help farmers across Rwanda make confident decisions every day.",
    getStarted: "Get started", signIn: "Log in to your account", trust: "Made for farmers in Rwanda",
    featuresEyebrow: "Tools that work for you", featuresTitle: "Make farming simpler, one step at a time.",
    feature1Title: "Trusted knowledge", feature1Body: "Find clear, practical guidance that fits the work you do on your farm.",
    feature2Title: "Make informed choices", feature2Body: "Plan your growing season with information you can put to work.",
    feature3Title: "Keep what you learn", feature3Body: "Save useful knowledge and information to support your farm over time.",
    footer: "Growing alongside farmers, every season.", language: "Language",
    loginTitle: "Welcome back", loginSubtitle: "Log in to your Eza Muhinzi account.", signupTitle: "Create your account", signupSubtitle: "Start your journey toward more informed farming.",
    email: "Email address", password: "Password", name: "Full name", confirmPassword: "Confirm password",
    loginAction: "Log in", signupAction: "Create account", noAccount: "New to Eza Muhinzi?", hasAccount: "Already have an account?",
    createAccount: "Create an account", loginLink: "Log in", loading: "Please wait...", authError: "Something went wrong. Please try again.",
    checkEmail: "Check your email to confirm your account.", configMissing: "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local to enable accounts.",
    appTitle: "Your space", appWelcome: "Welcome to Eza Muhinzi.", appBody: "Your farming tools will live here.", signOut: "Log out",
    home: "Home", dashboard: "Overview", backHome: "Back to home",
  },
} as const;

export type TranslationKey = keyof typeof translations.rw;
