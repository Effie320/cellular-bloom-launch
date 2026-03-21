const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">
              Unsere Mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8">
              Zelluläre Gesundheit
              <br />
              <span className="italic text-primary">neu gedacht</span>
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                Wir glauben, dass wahre Gesundheit auf zellulärer Ebene beginnt. Unser Ansatz verbindet modernste Wissenschaft mit der Weisheit der Natur, um deinem Körper genau das zu geben, was er braucht.
              </p>
              <p>
                Jedes unserer Produkte wurde sorgfältig entwickelt, um die natürlichen Regenerationsprozesse deines Körpers zu unterstützen – für mehr Energie, Vitalität und Wohlbefinden.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-display text-4xl font-semibold text-primary">15+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Jahre Forschung</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-primary">50k+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Zufriedene Kunden</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-primary">100%</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Natürlich</p>
              </div>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent/60" />
                  </div>
                </div>
                <p className="font-display text-2xl text-foreground italic">
                  "Jede Zelle zählt"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
