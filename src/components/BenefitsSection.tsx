import { Zap, Shield, Heart, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Zelluläre Energie",
    description: "Optimiere deine Mitochondrien-Funktion und steigere dein natürliches Energielevel auf zellulärer Ebene.",
  },
  {
    icon: Shield,
    title: "Immunabwehr",
    description: "Stärke dein Immunsystem durch gezielte Nährstoffversorgung deiner Zellen für maximalen Schutz.",
  },
  {
    icon: Heart,
    title: "Anti-Aging",
    description: "Verlangsame den Alterungsprozess durch zelluläre Regeneration und antioxidativen Schutz.",
  },
  {
    icon: Leaf,
    title: "Natürliche Basis",
    description: "100% natürliche, wissenschaftlich erforschte Inhaltsstoffe höchster Qualität und Bioverfügbarkeit.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">
            Vorteile
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Dein Körper verdient
            <br />
            <span className="italic text-primary">das Beste</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 lg:p-10 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
