import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const flags: Record<Language, string> = { el: "🇬🇷", en: "🇬🇧", de: "🇩🇪" };
const labels: Record<Language, string> = { el: "EL", en: "EN", de: "DE" };

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const languages: Language[] = ["el", "en", "de"];

  return (
    <div className="flex items-center gap-1 bg-background/10 rounded-lg p-1">
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-1 rounded text-xs font-body font-medium transition-all ${
            lang === l
              ? "bg-accent text-accent-foreground"
              : "text-primary-foreground/60 hover:text-primary-foreground"
          }`}
        >
          <span className="mr-1">{flags[l]}</span>
          {labels[l]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
