import { Moon, Brain, BatteryLow, ShieldAlert, Focus, Baby } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const iconMap = {
  moon: Moon,
  brain: Brain,
  "battery-low": BatteryLow,
  "shield-alert": ShieldAlert,
  focus: Focus,
  baby: Baby,
};

const SymptomsSection = () => {
  const { lang } = useLanguage();
  const t = translations.symptoms;

  return (
    <section id="symptoms" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">
            {t.tag[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            {t.title1[lang]}
            <br />
            <span className="italic text-primary">{t.title2[lang]}</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mt-6 font-light">
            {t.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-background border border-border hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title[lang]}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {item.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
