import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations.footer;

  return (
    <footer className="py-12 bg-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-2xl font-semibold text-background">Cellular Health</p>
            <p className="font-body text-sm text-background/50 mt-1">{t.tagline[lang]}</p>
          </div>
          <div className="flex gap-8 font-body text-sm text-background/50">
            <a href="#" className="hover:text-background/80 transition-colors">{t.imprint[lang]}</a>
            <a href="#" className="hover:text-background/80 transition-colors">{t.privacy[lang]}</a>
            <a href="#" className="hover:text-background/80 transition-colors">{t.contact[lang]}</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="font-body text-xs text-background/30">
            © {new Date().getFullYear()} {t.copyright[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
