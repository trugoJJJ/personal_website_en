import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Zap } from "lucide-react";

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

export const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Umiejętności & Kompetencje
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Połączenie umiejętności technicznych z soft skills, 
              które pozwalają mi skutecznie realizować cele biznesowe
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Technical Skills */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                Umiejętności Techniczne
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="space-y-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Tools */}
            <div className="space-y-12 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              
              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                  <Star className="h-6 w-6 text-secondary" />
                  Soft Skills
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-gradient-card p-4 rounded-lg shadow-card border border-border/50 hover:border-secondary/20 transition-all duration-300 hover-scale text-center"
                    >
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-accent" />
                  Narzędzia
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className="group bg-gradient-card px-4 py-2 rounded-full shadow-card border border-border/50 hover:border-accent/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                          {tool.name}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {tool.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Skills summary */}
          <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: "0.6s"}}>
            <div className="max-w-4xl mx-auto p-8 bg-gradient-secondary rounded-2xl text-white shadow-hero">
              <h4 className="text-xl font-semibold mb-4">Nieustanny rozwój</h4>
              <p className="text-white/90 leading-relaxed">
                Marketing cyfrowy to dziedzina, która zmienia się w błyskawicznym tempie. 
                Dlatego inwestuję minimum 10 godzin tygodniowo w naukę nowych narzędzi, 
                trendów i strategii, aby zawsze oferować najlepsze rozwiązania.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};