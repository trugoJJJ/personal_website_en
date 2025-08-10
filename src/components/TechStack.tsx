import { 
  Brain, 
  Palette, 
  Video, 
  Globe, 
  BarChart3, 
  Search, 
  FolderKanban, 
  Mail, 
  Megaphone, 
  Code,
  Zap,
  Sparkles
} from "lucide-react";

const techCategories = [
  {
    title: "AI Tools",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    tools: ["ChatGPT", "Claude", "Midjourney", "Runway", "Copy.ai"]
  },
  {
    title: "Grafika",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    tools: ["Photoshop", "Illustrator", "Figma", "Canva", "After Effects"]
  },
  {
    title: "Animacja",
    icon: Video,
    color: "from-green-500 to-emerald-500",
    tools: ["After Effects", "Lottie", "Rive", "Framer Motion", "GSAP"]
  },
  {
    title: "Strony internetowe",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    tools: ["React", "WordPress", "Webflow", "Framer", "Shopify"]
  },
  {
    title: "Analityka",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-500",
    tools: ["Google Analytics", "Hotjar", "Mixpanel", "Amplitude", "Data Studio"]
  },
  {
    title: "SEO",
    icon: Search,
    color: "from-teal-500 to-green-500",
    tools: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Surfer SEO"]
  },
  {
    title: "Zarządzanie projektami",
    icon: FolderKanban,
    color: "from-rose-500 to-pink-500",
    tools: ["Notion", "Asana", "Monday.com", "Trello", "Slack"]
  },
  {
    title: "Email Marketing",
    icon: Mail,
    color: "from-amber-500 to-orange-500",
    tools: ["Mailchimp", "ConvertKit", "ActiveCampaign", "Klaviyo", "Sendinblue"]
  },
  {
    title: "Systemy reklam PPC",
    icon: Megaphone,
    color: "from-violet-500 to-purple-500",
    tools: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "TikTok Ads", "Pinterest Ads"]
  },
  {
    title: "Programowanie",
    icon: Code,
    color: "from-slate-500 to-gray-500",
    tools: ["React", "TypeScript", "Node.js", "Python", "No-code tools"]
  }
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Tech Stack & Narzędzia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wykorzystuję najnowocześniejsze narzędzia i technologie, 
            aby dostarczać najwyższej jakości rozwiązania marketingowe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="group hover-scale bg-gradient-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} p-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                {/* Tools */}
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={tool}
                      className="text-sm text-muted-foreground text-center py-1 px-2 rounded-md bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5 text-primary" />
            <span>Ciągle uczę się nowych technologii i rozszerzam swoje umiejętności</span>
          </div>
        </div>
      </div>
    </section>
  );
};