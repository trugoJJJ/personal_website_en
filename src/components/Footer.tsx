import { Mail, Linkedin, Github, Heart } from "lucide-react";

const quickLinks = [
  { name: "O mnie", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Artykuły", href: "#articles" },
  { name: "Kontakt", href: "#contact" }
];

const services = [
  { name: "Digital Marketing Strategy", href: "#" },
  { name: "Google Ads Management", href: "#" },
  { name: "Social Media Marketing", href: "#" },
  { name: "Marketing Automation", href: "#" },
  { name: "Analytics & Reporting", href: "#" },
  { name: "Landing Page Design", href: "#" }
];

const resources = [
  { name: "Blog", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Newsletter", href: "#" },
  { name: "Marketing Tools", href: "#" },
  { name: "Free Templates", href: "#" }
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient">Marketing Wizard</h3>
                <p className="text-muted-foreground mt-2">
                  Digital Marketing & Growth Hacking
                </p>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pomagam firmom osiągać ambitne cele biznesowe poprzez strategiczne 
                podejście do digital marketingu i wykorzystanie najnowszych technologii.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Nawigacja</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Usługi</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Zasoby</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a 
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Zostań w pętli najnowszych trendów
            </h4>
            <p className="text-muted-foreground mb-6">
              Otrzymuj ekskluzywne insights, case studies i praktyczne porady o digital marketingu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Twój adres email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Subskrybuj
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Marketing Wizard. Wszystkie prawa zastrzeżone.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Regulamin
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>& lots of ☕</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};