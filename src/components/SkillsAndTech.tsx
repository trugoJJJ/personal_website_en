import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Minimalist combined section: Skills, Competencies and Tech Stack
// No colorful icons or gradients. Large type, generous spacing, neutral palette.

const technicalSkills = [
  { name: "Google Ads", level: 95, category: "PPC" },
  { name: "Facebook Ads", level: 92, category: "Social Media" },
  { name: "Google Analytics", level: 88, category: "Analytics" },
  { name: "SEO/SEM", level: 85, category: "Search" },
  { name: "Email Marketing", level: 90, category: "Automation" },
  { name: "Marketing Automation", level: 87, category: "Automation" },
  { name: "A/B Testing", level: 83, category: "Optimization" },
  { name: "Data Analysis", level: 80, category: "Analytics" }
];

const softSkills = [
  "Strategic Thinking",
  "Project Management",
  "Client Communication",
  "Creative Problem Solving",
  "Team Leadership",
  "Budget Management",
  "Cross-functional Collaboration",
  "Agile Methodology"
];

const tools = [
  { name: "HubSpot", type: "CRM" },
  { name: "Salesforce", type: "CRM" },
  { name: "Mailchimp", type: "Email" },
  { name: "Hootsuite", type: "Social" },
  { name: "Semrush", type: "SEO" },
  { name: "Hotjar", type: "Analytics" },
  { name: "Zapier", type: "Automation" },
  { name: "Slack", type: "Communication" },
  { name: "Notion", type: "Productivity" },
  { name: "Figma", type: "Design" }
];

// Tech stack categories (simplified, no icons/colors)
const techCategories = [
  {
    title: "AI Tools",
    tools: ["ChatGPT", "Claude", "Midjourney", "Runway", "Copy.ai"],
  },
  {
    title: "Grafika",
    tools: ["Photoshop", "Illustrator", "Figma", "Canva", "After Effects"],
  },
  {
    title: "Animacja",
    tools: ["After Effects", "Lottie", "Rive", "Framer Motion", "GSAP"],
  },
  {
    title: "Strony internetowe",
    tools: ["React", "WordPress", "Webflow", "Framer", "Shopify"],
  },
  {
    title: "Analityka",
    tools: ["Google Analytics", "Hotjar", "Mixpanel", "Amplitude", "Data Studio"],
  },
  {
    title: "SEO",
    tools: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Surfer SEO"],
  },
  {
    title: "Zarządzanie projektami",
    tools: ["Notion", "Asana", "Monday.com", "Trello", "Slack"],
  },
  {
    title: "Email Marketing",
    tools: ["Mailchimp", "ConvertKit", "ActiveCampaign", "Klaviyo", "Sendinblue"],
  },
  {
    title: "Systemy reklam PPC",
    tools: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "TikTok Ads", "Pinterest Ads"],
  },
  {
    title: "Programowanie",
    tools: ["React", "TypeScript", "Node.js", "Python", "No-code tools"],
  },
];

export const SkillsAndTech = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Umiejętności, Kompetencje i Tech Stack
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Minimalistyczny przegląd tego, w czym jestem najlepszy — techniczne skille,
              kompetencje miękkie i narzędzia, z których korzystam na co dzień.
            </p>
          </header>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <article>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">
                Umiejętności techniczne
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-base md:text-lg text-foreground">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-muted" />
                  </div>
                ))}
              </div>
            </article>

            {/* Soft Skills and Tools */}
            <aside className="space-y-14">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Soft skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center rounded-full border border-border bg-muted/40 px-4 py-2 text-sm md:text-base text-foreground/90"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Narzędzia
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="inline-flex items-center rounded-full border border-border bg-muted/40 px-4 py-2 text-sm md:text-base text-foreground/90"
                    >
                      <span>{tool.name}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{tool.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Tech Stack - minimalist */}
          <section className="mt-20">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">
              Tech Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {techCategories.map((cat) => (
                <div key={cat.title} className="rounded-xl border border-border p-6">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {cat.tools.map((tool) => (
                      <div
                        key={tool}
                        className="inline-flex items-center rounded-full border border-border bg-muted/40 px-4 py-2 text-sm md:text-base text-foreground/90"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border border-border bg-muted/30">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                Nieustanny rozwój
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Marketing cyfrowy zmienia się błyskawicznie. Każdego tygodnia poświęcam czas
                na naukę nowych narzędzi, trendów i strategii, aby dostarczać maksymalne efekty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
