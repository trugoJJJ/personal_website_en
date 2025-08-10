import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero animate-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Marketing
                  <span className="block text-gradient-accent">Wizard</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
                  Freelancer & Marketing Manager specjalizujący się w digital marketing, 
                  automatyzacji i growth hacking
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white font-semibold px-8 py-6 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Skontaktuj się
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg"
                >
                  Zobacz Portfolio
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start pt-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-hero animate-pulse-glow">
                  <img 
                    src={heroPortrait} 
                    alt="Marketing Manager Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{animationDelay: "1s"}}>
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};