import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ClipboardCheck, Search, Fingerprint, RefreshCw } from "lucide-react";

const icons = [ClipboardCheck, Search, Fingerprint, RefreshCw];

const ProcessSection = () => {
  const { lang } = useLanguage();
  const t = translations.process;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">{t.tag[lang]}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            {t.title1[lang]}
            <br />
            <span className="italic text-primary">{t.title2[lang]}</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mt-6 font-light">
            {t.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative p-8 rounded-2xl bg-card border border-border text-center group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-display text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="w-14 h-14 mx-auto mb-6 mt-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title[lang]}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.description[lang]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
