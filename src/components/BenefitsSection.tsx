import { Zap, Shield, Heart, Leaf } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Zap, Shield, Heart, Leaf];

const BenefitsSection = () => {
  const { lang } = useLanguage();
  const t = translations.benefits;

  return (
    <section id="benefits" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">{t.tag[lang]}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            {t.title1[lang]}
            <br />
            <span className="italic text-primary">{t.title2[lang]}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="group p-8 lg:p-10 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-elevated)] transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{item.title[lang]}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{item.description[lang]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
