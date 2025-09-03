"use client";

import { usePalette } from "./hooks";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";

const TechStackSectionContent = () => {
  const { isDark, P } = usePalette(); // Dodaj destrukturyzację
  
  const techStack = [
    { category: "AI Tools", items: [{ name: "ChatGPT", url: "https://chat.openai.com" }, { name: "Gemini", url: "https://gemini.google.com" }, { name: "Cursor AI", url: "https://cursor.sh" }, { name: "Napkin AI", url: "https://napkin.ai" }, { name: "N8N", url: "https://n8n.io" }] },
    { category: "Design & Grafika", items: [{ name: "Photoshop", url: "https://adobe.com" }, { name: "Illustrator", url: "https://adobe.com" }, { name: "Figma", url: "https://figma.com" }, { name: "After Effects", url: "https://adobe.com" }, { name: "Blender", url: "https://blender.org" }] },
    { category: "Animacja & Video", items: [{ name: "After Effects", url: "https://adobe.com" }, { name: "Premiere Pro", url: "https://adobe.com" }, { name: "Blender", url: "https://blender.org" }, { name: "Framer", url: "https://framer.com" }, { name: "Lottie", url: "https://lottiefiles.com" }] },
    { category: "Programowanie", items: [{ name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }, { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }, { name: "Python", url: "https://www.python.org" }, { name: "React", url: "https://react.dev" }, { name: "TypeScript", url: "https://www.typescriptlang.org" }] },
    { category: "No-Code & Prototyping", items: [{ name: "Lovable", url: "https://lovable.dev" }, { name: "Framer", url: "https://framer.com" }, { name: "WordPress", url: "https://wordpress.org" }, { name: "Webflow", url: "https://webflow.com" }, { name: "Figma", url: "https://figma.com" }] },
    { category: "Analityka", items: [{ name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" }, { name: "Google Tag Manager", url: "https://tagmanager.google.com" }, { name: "Hotjar", url: "https://hotjar.com" }, { name: "Mixpanel", url: "https://mixpanel.com" }, { name: "Data Studio", url: "https://lookerstudio.google.com/" }] },
    { category: "Social Media", items: [{ name: "Facebook", url: "https://facebook.com" }, { name: "Instagram", url: "https://instagram.com" }, { name: "LinkedIn", url: "https://linkedin.com" }, { name: "Behance", url: "https://behance.net" }, { name: "Upwork", url: "https://upwork.com" }] },
    { category: "Email Marketing", items: [{ name: "Mailchimp", url: "https://mailchimp.com" }, { name: "Mailer", url: "https://mailer.com" }, { name: "GetResponse", url: "https://getresponse.com" }, { name: "ConvertKit", url: "https://convertkit.com" }, { name: "ActiveCampaign", url: "https://activecampaign.com" }] },
    { category: "SEO & Search", items: [{ name: "Google Search Console", url: "https://search.google.com/search-console" }, { name: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider/" }, { name: "Ahrefs", url: "https://ahrefs.com" }, { name: "SEMRush", url: "https://semrush.com" }, { name: "Senuto", url: "https://senuto.com" }] },
    { category: "Systemy reklam PPC", items: [{ name: "Google Ads", url: "https://ads.google.com" }, { name: "Facebook Ads", url: "https://facebook.com/business/ads" }, { name: "LinkedIn Ads", url: "https://business.linkedin.com/marketing-solutions/ads" }, { name: "TikTok Ads", url: "https://ads.tiktok.com" }, { name: "Pinterest Ads", url: "https://ads.pinterest.com" }] },
    { category: "Zarządzanie projektami", items: [{ name: "Notion", url: "https://notion.so" }, { name: "Asana", url: "https://asana.com" }, { name: "Monday.com", url: "https://monday.com" }, { name: "Trello", url: "https://trello.com" }, { name: "Slack", url: "https://slack.com" }] },
    { category: "Komunikacja", items: [{ name: "Slack", url: "https://slack.com" }, { name: "Discord", url: "https://discord.com" }, { name: "Microsoft Teams", url: "https://teams.microsoft.com" }, { name: "Zoom", url: "https://zoom.us" }, { name: "Google Meet", url: "https://meet.google.com" }] },
  ];

  return (
    <section 
      className="py-24 md:py-36" 
      id="techstack"
      style={{ background: P("ecru"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}
    >
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12 md:mb-24 mt-4 md:mt-8">
          <h2 
            className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
            style={{ color: isDark ? P("white") : P("black") }}
          >
            Tech Stack
          </h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((block) => (
            <div 
              key={block.category} 
              className="p-6"
              style={{ 
                background: isDark ? P("charcoal") : P("white"), 
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, 
                color: isDark ? P("white") : P("charcoal") 
              }}
            >
              <h3 className="text-xl font-extrabold mb-4">{block.category}</h3>
              <div className="flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <a 
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm font-bold transition-colors"
                    style={{ 
                      border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`, 
                      background: P("ecru"), 
                      color: isDark ? P("white") : P("black") 
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = P("amaranth");
                      (e.currentTarget as HTMLAnchorElement).style.color = P("white");
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = P("ecru");
                      (e.currentTarget as HTMLAnchorElement).style.color = isDark ? P("white") : P("black");
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TechStackSection = () => {
  return (
    <ClientOnlyWrapper fallback={
      <section className="py-24 md:py-36 bg-[#FAF6EE] border-t-3 border-black" id="techstack">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-12 md:mb-24 mt-4 md:mt-8">
            <h2 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
              Tech Stack
            </h2>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "AI Tools", "Design & Grafika", "Animacja & Video", "Programowanie", "No-Code & Prototyping", "Analityka",
              "Social Media", "Email Marketing", "SEO & Search", "Systemy reklam PPC", "Zarządzanie projektami", "Komunikacja"
            ].map((category) => (
              <div key={category} className="p-6 border-3 border-black bg-white text-[#2E2217]">
                <h3 className="text-xl font-extrabold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="px-3 py-1 text-sm font-bold border-2 border-black bg-[#FAF6EE] text-black">
                      Tool {i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    }>
      <TechStackSectionContent />
    </ClientOnlyWrapper>
  );
};