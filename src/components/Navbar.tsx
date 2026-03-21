import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/20 backdrop-blur-md border-b border-background/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-primary-foreground">
          Cellular Health
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Vorteile</a>
          <a href="#contact" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Kontakt</a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-accent text-accent-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity">
            Beratung
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-background/10 px-6 py-6 space-y-4">
          <a href="#benefits" onClick={() => setIsOpen(false)} className="block font-body text-primary-foreground/70 hover:text-primary-foreground">Vorteile</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block font-body text-primary-foreground/70 hover:text-primary-foreground">Kontakt</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-center px-5 py-2 rounded-lg bg-accent text-accent-foreground font-body text-sm font-medium">
            Beratung
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
