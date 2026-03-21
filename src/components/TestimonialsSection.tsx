const testimonials = [
  {
    quote: "Seit ich die Cellular Health Produkte nehme, fühle ich mich wie neu geboren. Mein Energielevel hat sich komplett verändert.",
    name: "Maria S.",
    role: "Unternehmerin",
  },
  {
    quote: "Endlich ein Ansatz, der wissenschaftlich fundiert ist und wirklich funktioniert. Meine Blutwerte haben sich deutlich verbessert.",
    name: "Thomas K.",
    role: "Arzt",
  },
  {
    quote: "Die Beratung war herausragend. Man merkt, dass hier echte Expertise und Leidenschaft zusammenkommen.",
    name: "Anna L.",
    role: "Fitness-Trainerin",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">
            Erfahrungen
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Was unsere Kunden
            <br />
            <span className="italic text-primary">sagen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
