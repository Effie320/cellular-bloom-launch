import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock } from "lucide-react";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
const CTASection = () => {
  const { lang } = useLanguage();
  const t = translations.cta;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase
    .from('instagram_leads_test')
    .insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        infos: form.message
      },
    ]);

  if (error) {
    console.log(error);
    alert("Κάτι πήγε λάθος");
  } else {
    setSubmitted(true);
  }
};

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-accent uppercase tracking-[0.25em] text-sm mb-4">{t.tag[lang]}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
            {t.title1[lang]}
            <br />
            <span className="italic text-accent">{t.title2[lang]}</span>
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg font-light">
            {t.subtitle[lang]}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
            <p className="font-display text-2xl text-primary-foreground">{t.success[lang]}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-sm text-primary-foreground/80 mb-2">{t.nameLabel[lang]}</label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.namePlaceholder[lang]}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-primary-foreground/80 mb-2">{t.emailLabel[lang]}</label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.emailPlaceholder[lang]}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-primary-foreground/80 mb-2">{t.phoneLabel[lang]}</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t.phonePlaceholder[lang]}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-primary-foreground/80 mb-2">{t.messageLabel[lang]}</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.messagePlaceholder[lang]}
                rows={3}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-accent text-accent-foreground font-body font-medium text-base hover:opacity-90 transition-opacity"
            >
              {t.submit[lang]}
            </button>
            <div className="flex items-start gap-2 mt-4">
              <Lock className="w-4 h-4 text-primary-foreground/40 mt-0.5 shrink-0" />
              <p className="font-body text-xs text-primary-foreground/40 leading-relaxed">
                {t.privacy[lang]}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CTASection;
