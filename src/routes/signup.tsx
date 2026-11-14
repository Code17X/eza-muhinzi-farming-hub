import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/language-switcher";
import { AuthForm } from "@/components/auth-form";
export const Route = createFileRoute("/signup")({head: () => pageHead("Create your account", "Create your Eza Muhinzi account to access practical farming tools for Rwanda."),  component: SignupPage });
function SignupPage() { return <><div className="auth-language"><LanguageSwitcher /></div><AuthForm mode="signup" /></>; }
