import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const TestimonialsSection = () => {
  const { lang } = useLanguage();
  const t = translations.testimonials;

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonial.quote[lang]}"
              </p>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">{testimonial.name}</p>
                <p className="font-body text-sm text-muted-foreground">{testimonial.role[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
