import { createFileRoute } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/language-switcher";
import { AuthForm } from "@/components/auth-form";
export const Route = createFileRoute("/signup")({ component: SignupPage });
function SignupPage() { return <><div className="auth-language"><LanguageSwitcher /></div><AuthForm mode="signup" /></>; }
