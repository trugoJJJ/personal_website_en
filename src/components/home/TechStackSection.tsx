"use client";

import { usePalette } from "./hooks";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";

const TechStackSectionContent = () => {
  const { isDark, P } = usePalette(); // Add destructuring
  
  const techStack = [
    { category: "AI Tools", items: [{ name: "ChatGPT", url: "https://chat.openai.com" }, { name: "Gemini", url: "https://gemini.google.com" }, { name: "Cursor AI", url: "https://cursor.sh" }, { name: "Napkin AI", url: "https://napkin.ai" }, { name: "Runway", url: "https://runwayml.com" }, { name: "Midjourney", url: "https://midjourney.com" }] },
    { category: "Design & Graphics", items: [{ name: "Photoshop", url: "https://adobe.com" }, { name: "Illustrator", url: "https://adobe.com" }, { name: "Figma", url: "https://figma.com" }, { name: "After Effects", url: "https://adobe.com" }, { name: "Blender", url: "https://blender.org" }] },
    { category: "Animation & Video", items: [{ name: "After Effects", url: "https://adobe.com" }, { name: "Premiere Pro", url: "https://adobe.com" }, { name: "Blender", url: "https://blender.org" }, { name: "Framer", url: "https://framer.com" }, { name: "Lottie", url: "https://lottiefiles.com" }] },
    { category: "Programming", items: [{ name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }, { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }, { name: "Python", url: "https://www.python.org" }, { name: "GitHub", url: "https://github.com" }, { name: "VSCode/Cursor", url: "https://cursor.sh" }, { name: "Vercel/CyberFolks", url: "https://vercel.com" }] },
    { category: "No-code/Low-code", items: [{ name: "Lovable", url: "https://lovable.dev" }, { name: "Framer", url: "https://framer.com" }, { name: "WordPress", url: "https://wordpress.org" }, { name: "Webflow", url: "https://webflow.com" }, { name: "Figma", url: "https://figma.com" }, { name: "N8N", url: "https://n8n.io" }, { name: "Zapier", url: "https://zapier.com" }, { name: "Make", url: "https://make.com" }, { name: "Claude Code CLI", url: "https://claude.ai" }] },
    { category: "Analytics", items: [{ name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" }, { name: "Power BI", url: "https://powerbi.microsoft.com" }, { name: "Google Tag Manager", url: "https://tagmanager.google.com" }, { name: "Hotjar", url: "https://hotjar.com" }, { name: "Data Studio", url: "https://lookerstudio.google.com/" }, { name: "Brand24", url: "https://brand24.com" }, { name: "Excel/Google Spreadsheet", url: "https://sheets.google.com" }, { name: "Asana", url: "https://asana.com" }] },
    { category: "Social Media & PPC", items: [{ name: "Facebook", url: "https://facebook.com" }, { name: "Instagram", url: "https://instagram.com" }, { name: "LinkedIn", url: "https://linkedin.com" }, { name: "YouTube", url: "https://youtube.com" }, { name: "Hootsuite", url: "https://hootsuite.com" }, { name: "LinkedIn Helper", url: "https://linkedin.com" }, { name: "Google Ads", url: "https://ads.google.com" }] },
    { category: "Email Marketing", items: [{ name: "Mailchimp", url: "https://mailchimp.com" }, { name: "MailerLite", url: "https://www.mailerlite.com/pl/signup" }, { name: "GetResponse", url: "https://getresponse.com" }, { name: "ConvertKit", url: "https://convertkit.com" }, { name: "Klaviyo", url: "https://klaviyo.com" }, { name: "FreshMail", url: "https://freshmail.com" }] },
    { category: "Project Management", items: [{ name: "Notion", url: "https://notion.so" }, { name: "Asana", url: "https://asana.com" }, { name: "Trello", url: "https://trello.com" }, { name: "Slack", url: "https://slack.com" }, { name: "HubSpot CRM", url: "https://hubspot.com" }, { name: "Pipedrive", url: "https://pipedrive.com" }, { name: "SALESmanago", url: "https://salesmanago.com" }] },
    { category: "Communication", items: [{ name: "Slack", url: "https://slack.com" }, { name: "Discord", url: "https://discord.com" }, { name: "Microsoft Teams", url: "https://teams.microsoft.com" }, { name: "Zoom", url: "https://zoom.us" }, { name: "Google Meet", url: "https://meet.google.com" }] },
    { category: "SEO", items: [{ name: "Google Search Console", url: "https://search.google.com/search-console" }, { name: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider/" }, { name: "Ahrefs", url: "https://ahrefs.com" }, { name: "SEMRush", url: "https://semrush.com" }, { name: "Senuto", url: "https://senuto.com" }, { name: "NeuronWriter", url: "https://neuronwriter.com" }, { name: "SEMStorm", url: "https://semstorm.com" }, { name: "Surfer SEO", url: "https://surferseo.com" }, { name: "Google Keyword Planner", url: "https://ads.google.com/home/tools/keyword-planner/" }, { name: "AnswerThePublic", url: "https://answerthepublic.com" }] },
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
              className={`p-6 ${block.category === "SEO" ? "md:col-span-2 lg:col-span-2" : ""}`}
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
              "AI Tools", "Design & Graphics", "Animation & Video", "Programming", "No-code/Low-code", "Analytics",
              "Social Media & PPC", "SEO", "Email Marketing", "Project Management", "Communication"
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