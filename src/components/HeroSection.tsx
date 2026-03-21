import heroImage from "@/assets/hero-cellular.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Cellular structures" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
        <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
          {t.tagline[lang]}
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground leading-[1.1] mb-8 animate-fade-up">
          {t.title1[lang]}
          <br />
          <span className="italic text-accent">{t.title2[lang]}</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {t.subtitle[lang]}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="#symptoms" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-medium text-base hover:opacity-90 transition-opacity">
            {t.ctaPrimary[lang]}
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-body font-medium text-base hover:bg-primary-foreground/10 transition-colors">
            {t.ctaSecondary[lang]}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/0 via-primary-foreground/50 to-primary-foreground/0" />
      </div>
    </section>
  );
};

export default HeroSection;
