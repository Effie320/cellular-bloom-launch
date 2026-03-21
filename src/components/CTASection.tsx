const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">
          Starte jetzt
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-8">
          Bereit für deine
          <br />
          <span className="italic text-accent">zelluläre Transformation?</span>
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-12 font-light">
          Lass dich unverbindlich beraten und erfahre, wie du deine Gesundheit auf zellulärer Ebene optimieren kannst.
        </p>
        <a
          href="mailto:info@cellular-health.de"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-accent text-accent-foreground font-body font-medium text-base hover:opacity-90 transition-opacity"
        >
          Kostenlose Beratung anfragen
        </a>
      </div>
    </section>
  );
};

export default CTASection;
