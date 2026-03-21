import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutSection = () => {
  const { lang } = useLanguage();
  const t = translations.approach;

  return (
    <section id="approach" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">{t.tag[lang]}</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8">
              {t.title1[lang]}
              <br />
              <span className="italic text-primary">{t.title2[lang]}</span>
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>{t.p1[lang]}</p>
              <p>{t.p2[lang]}</p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-display text-4xl font-semibold text-primary">{t.stat1[lang]}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{t.stat1Label[lang]}</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-primary">{t.stat2[lang]}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{t.stat2Label[lang]}</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-primary">{t.stat3[lang]}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{t.stat3Label[lang]}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent/60" />
                  </div>
                </div>
                <p className="font-display text-2xl text-foreground italic">{t.cellQuote[lang]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
