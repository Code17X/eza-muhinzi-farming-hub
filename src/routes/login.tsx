import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/language-switcher";
import { AuthForm } from "@/components/auth-form";
export const Route = createFileRoute("/login")({head: () => pageHead("Sign in", "Sign in to your Eza Muhinzi farming tools and saved crop diagnoses."),  component: LoginPage });
function LoginPage() { return <><div className="auth-language"><LanguageSwitcher /></div><AuthForm mode="login" /></>; }
