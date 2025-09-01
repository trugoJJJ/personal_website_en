"use client";

import { usePalette } from "./hooks";

const TechStackSection = () => {
  const { isDark, P } = usePalette(); // Dodaj destrukturyzację
  
  const techStack = [
    { category: "AI Tools", items: [{ name: "ChatGPT", url: "https://chat.openai.com" }, { name: "Claude", url: "https://claude.ai" }, { name: "Midjourney", url: "https://www.midjourney.com" }, { name: "Runway", url: "https://runwayml.com" }, { name: "Copy.ai", url: "https://www.copy.ai" }] },
    { category: "Grafika", items: [{ name: "Photoshop", url: "https://adobe.com" }, { name: "Illustrator", url: "https://adobe.com" }, { name: "Figma", url: "https://figma.com" }, { name: "Canva", url: "https://canva.com" }, { name: "After Effects", url: "https://adobe.com" }] },
    { category: "Animacja", items: [{ name: "After Effects", url: "https://adobe.com" }, { name: "Lottie", url: "https://lottiefiles.com" }, { name: "Rive", url: "https://rive.app" }, { name: "Framer Motion", url: "https://www.framer.com/motion/" }, { name: "GSAP", url: "https://greensock.com/gsap/" }] },
    { category: "Strony internetowe", items: [{ name: "React", url: "https://react.dev" }, { name: "WordPress", url: "https://wordpress.org" }, { name: "Webflow", url: "https://webflow.com" }, { name: "Framer", url: "https://framer.com" }, { name: "Shopify", url: "https://shopify.com" }] },
    { category: "Analityka", items: [{ name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" }, { name: "Hotjar", url: "https://hotjar.com" }, { name: "Mixpanel", url: "https://mixpanel.com" }, { name: "Amplitude", url: "https://amplitude.com" }, { name: "Data Studio", url: "https://lookerstudio.google.com/" }] },
    { category: "SEO", items: [{ name: "Ahrefs", url: "https://ahrefs.com" }, { name: "SEMRush", url: "https://semrush.com" }, { name: "Google Search Console", url: "https://search.google.com/search-console" }, { name: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider/" }, { name: "Surfer SEO", url: "https://surferseo.com" }] },
    { category: "Zarządzanie projektami", items: [{ name: "Notion", url: "https://notion.so" }, { name: "Asana", url: "https://asana.com" }, { name: "Monday.com", url: "https://monday.com" }, { name: "Trello", url: "https://trello.com" }, { name: "Slack", url: "https://slack.com" }] },
    { category: "Email Marketing", items: [{ name: "Mailchimp", url: "https://mailchimp.com" }, { name: "ConvertKit", url: "https://convertkit.com" }, { name: "ActiveCampaign", url: "https://activecampaign.com" }, { name: "Klaviyo", url: "https://klaviyo.com" }, { name: "Sendinblue", url: "https://www.brevo.com" }] },
    { category: "Systemy reklam PPC", items: [{ name: "Google Ads", url: "https://ads.google.com" }, { name: "Facebook Ads", url: "https://facebook.com/business/ads" }, { name: "LinkedIn Ads", url: "https://business.linkedin.com/marketing-solutions/ads" }, { name: "TikTok Ads", url: "https://ads.tiktok.com" }, { name: "Pinterest Ads", url: "https://ads.pinterest.com" }] },
    { category: "Programowanie", items: [{ name: "React", url: "https://react.dev" }, { name: "TypeScript", url: "https://www.typescriptlang.org" }, { name: "Node.js", url: "https://nodejs.org" }, { name: "Python", url: "https://www.python.org" }, { name: "No-code tools", url: "https://www.nocodelist.co/" }] },
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

export { TechStackSection };